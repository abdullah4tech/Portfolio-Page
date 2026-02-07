<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'

const props = defineProps<{
  username: string
  joinYear?: number
}>()

interface ContributionDay {
  date: string
  count: number
  level: number // 0–4
}

const contributions = ref<ContributionDay[]>([])
const totalCount = ref(0)
const isLoading = ref(true)
const hasError = ref(false)

// GitHub green palette
const levelColors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']

const CELL_SIZE = 12
const CELL_GAP = 3
const CELL_RADIUS = 2

// Year selector — generate years from join year to current
const currentYear = new Date().getFullYear()
const joinYear = props.joinYear ?? 2022
const years = computed(() => {
  const result: number[] = []
  for (let y = currentYear; y >= joinYear; y--) result.push(y)
  return result.slice(0, 5) // last 5 years max
})
const selectedYear = ref<number | undefined>(undefined) // undefined = "last 12 months"

async function fetchContributions(year?: number) {
  isLoading.value = true
  hasError.value = false

  try {
    const query = year ? `?y=${year}` : '?y=last'
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${props.username}${query}`,
    )
    if (!res.ok) throw new Error('Failed to fetch')

    const data = await res.json()
    contributions.value = data.contributions || []

    // Total count
    if (year) {
      totalCount.value = data.total?.[year] ?? 0
    } else {
      totalCount.value = data.total?.lastYear ?? data.total?.[currentYear] ?? 0
    }
  } catch {
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}

onMounted(() => fetchContributions())

watch(selectedYear, (y) => fetchContributions(y))

function selectYear(year: number) {
  selectedYear.value = selectedYear.value === year ? undefined : year
}

// Organize contributions into weeks (columns) for the grid
const weeks = computed(() => {
  if (!contributions.value.length) return []

  const result: ContributionDay[][] = []
  let currentWeek: ContributionDay[] = []

  // Pad the first week so it starts on Sunday
  const firstDay = new Date(contributions.value[0].date).getDay()
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push({ date: '', count: 0, level: -1 })
  }

  for (const day of contributions.value) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      result.push(currentWeek)
      currentWeek = []
    }
  }
  if (currentWeek.length) result.push(currentWeek)

  return result
})

const svgWidth = computed(() => weeks.value.length * (CELL_SIZE + CELL_GAP) + CELL_GAP)
const svgHeight = 7 * (CELL_SIZE + CELL_GAP) + CELL_GAP

// Month labels
const monthLabels = computed(() => {
  const labels: { text: string; x: number }[] = []
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let lastMonth = -1

  weeks.value.forEach((week, weekIdx) => {
    const firstReal = week.find((d) => d.date)
    if (!firstReal) return
    const month = new Date(firstReal.date).getMonth()
    if (month !== lastMonth) {
      lastMonth = month
      labels.push({
        text: months[month],
        x: weekIdx * (CELL_SIZE + CELL_GAP) + CELL_GAP,
      })
    }
  })

  return labels
})

// Day labels (Mon, Wed, Fri)
const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', '']

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const DAY_LABEL_WIDTH = 32
</script>

<template>
  <div class="graph-wrapper">
    <!-- Card container -->
    <div class="bg-gray-50/80 border border-gray-200 p-5 sm:p-6 rounded-xl">
      <!-- Loading skeleton -->
      <div v-if="isLoading" class="w-full h-[140px] rounded-lg bg-gray-100 animate-pulse" />

      <!-- Error fallback -->
      <div v-else-if="hasError" class="text-sm text-gray-400 py-8 text-center">
        Could not load contribution data.
      </div>

      <!-- Graph -->
      <div v-else>
        <div class="graph-svg-container">
          <svg
            :viewBox="`0 0 ${svgWidth + DAY_LABEL_WIDTH} ${svgHeight + 28}`"
            class="block w-full h-auto"
            role="img"
            aria-label="GitHub contribution graph"
          >
            <!-- Month labels -->
            <text
              v-for="label in monthLabels"
              :key="label.text + label.x"
              :x="label.x + DAY_LABEL_WIDTH"
              :y="10"
              fill="#9ca3af"
              font-size="11"
              font-family="Inter, system-ui, sans-serif"
            >
              {{ label.text }}
            </text>

            <!-- Day labels (Mon, Wed, Fri) -->
            <text
              v-for="(label, i) in dayLabels"
              :key="'day-' + i"
              :x="0"
              :y="18 + i * (CELL_SIZE + CELL_GAP) + CELL_SIZE - 2"
              fill="#9ca3af"
              font-size="10"
              font-family="Inter, system-ui, sans-serif"
            >
              {{ label }}
            </text>

            <!-- Contribution cells -->
            <g :transform="`translate(${DAY_LABEL_WIDTH}, 18)`">
              <template v-for="(week, wi) in weeks" :key="wi">
                <rect
                  v-for="(day, di) in week"
                  :key="`${wi}-${di}`"
                  :x="wi * (CELL_SIZE + CELL_GAP) + CELL_GAP"
                  :y="di * (CELL_SIZE + CELL_GAP) + CELL_GAP"
                  :width="CELL_SIZE"
                  :height="CELL_SIZE"
                  :rx="CELL_RADIUS"
                  :ry="CELL_RADIUS"
                  :fill="day.level < 0 ? 'transparent' : levelColors[day.level]"
                  class="github-cell"
                >
                  <title v-if="day.date">
                    {{ day.count }} contribution{{ day.count !== 1 ? 's' : '' }} on {{ formatDate(day.date) }}
                  </title>
                </rect>
              </template>
            </g>
          </svg>
        </div>

        <!-- Footer: total + legend -->
        <div class="flex items-center justify-between mt-3 text-xs text-gray-400">
          <span class="font-mono">
            {{ totalCount.toLocaleString() }} contributions in {{ selectedYear ?? 'the last year' }}
          </span>

          <!-- Less/More legend -->
          <div class="flex items-center gap-1.5">
            <span>Less</span>
            <div
              v-for="(color, i) in levelColors"
              :key="i"
              :style="{ background: color }"
              class="w-[11px] h-[11px] rounded-sm"
            />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Year buttons -->
    <div class="flex flex-row flex-wrap gap-2 mt-4">
      <button
        v-for="year in years"
        :key="year"
        @click="selectYear(year)"
        class="rounded-lg text-center px-3.5 py-1.5 border text-sm font-medium transition-all duration-150 cursor-pointer"
        :class="
          (selectedYear ?? currentYear) === year
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-gray-50 text-gray-700 border-transparent hover:border-gray-200'
        "
        :title="`View contributions for ${year}`"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.graph-wrapper {
  width: 100%;
  max-width: 722px;
}
.graph-svg-container {
  width: 100%;
}
.github-cell {
  transition: opacity 0.15s ease;
  outline: 1px solid rgba(27, 31, 35, 0.04);
  outline-offset: -1px;
}
.github-cell:hover {
  opacity: 0.7;
}
</style>
