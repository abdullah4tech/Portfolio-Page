<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import type { Photo } from '@/data/photos'
import PhotoLightbox from './PhotoLightbox.vue'

const props = withDefaults(
  defineProps<{
    photos: Photo[]
    gutter?: number
  }>(),
  { gutter: 16 },
)

const gridRef = ref<HTMLElement | null>(null)
const lightboxRef = ref<InstanceType<typeof PhotoLightbox> | null>(null)
let msnry: Masonry | null = null

/* ── Filtering ── */
const activeTag = ref<string | null>(null)

const allTags = computed(() => {
  const tags = new Set<string>()
  props.photos.forEach((p) => p.tags?.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
})

const filteredPhotos = computed(() => {
  if (!activeTag.value) return props.photos
  return props.photos.filter((p) => p.tags?.includes(activeTag.value!))
})

function setTag(tag: string | null) {
  activeTag.value = activeTag.value === tag ? null : tag
}

/* ── Masonry ── */
function layoutMasonry() {
  if (!gridRef.value) return

  msnry?.destroy?.()

  msnry = new Masonry(gridRef.value, {
    itemSelector: '.photo-item',
    columnWidth: '.photo-sizer',
    percentPosition: true,
    gutter: props.gutter,
    transitionDuration: '0.25s',
  })

  imagesLoaded(gridRef.value).on('progress', () => {
    msnry?.layout?.()
  })
}

onMounted(() => layoutMasonry())

onBeforeUnmount(() => {
  msnry?.destroy?.()
  msnry = null
})

watch(filteredPhotos, () => {
  nextTick(() => layoutMasonry())
})

/* ── Lightbox ── */
function openLightbox(index: number) {
  lightboxRef.value?.open(index)
}

/* ── Progressive loading ── */
const loaded = ref(new Set<string>())
function onImageLoad(id: string) {
  loaded.value.add(id)
}
</script>

<template>
  <div class="photo-gallery">
    <!-- Tag filter pills -->
    <div v-if="allTags.length" class="flex flex-wrap gap-2 mb-8">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="setTag(tag)"
        class="text-xs font-mono tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer"
        :class="
          activeTag === tag
            ? 'bg-gray-900 text-white border-gray-900'
            : 'text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'
        "
      >
        {{ tag }}
      </button>
      <button
        v-if="activeTag"
        @click="setTag(null)"
        class="text-xs font-mono tracking-wider px-3 py-1.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
      >
        clear
      </button>
    </div>

    <!-- Masonry grid -->
    <div ref="gridRef" class="photo-grid">
      <!-- Column sizer (hidden, for Masonry percentPosition) -->
      <div class="photo-sizer" />

      <div
        v-for="(photo, index) in filteredPhotos"
        :key="photo.id"
        class="photo-item"
        @click="openLightbox(index)"
      >
        <div class="photo-card group" role="button" tabindex="0" :aria-label="`View ${photo.alt}`"
          @keydown.enter="openLightbox(index)" @keydown.space.prevent="openLightbox(index)">
          <!-- Image -->
          <img
            :src="photo.thumb"
            :alt="photo.alt"
            :width="photo.width"
            :height="photo.height"
            loading="lazy"
            decoding="async"
            class="photo-img"
            :class="{ 'photo-img--loaded': loaded.has(photo.id) }"
            @load="onImageLoad(photo.id)"
          />

          <!-- Hover overlay -->
          <div class="photo-overlay" aria-hidden="true">
            <div class="photo-meta">
              <span v-if="photo.title" class="photo-title">{{ photo.title }}</span>
              <span v-if="photo.location" class="photo-location">📍 {{ photo.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="filteredPhotos.length === 0" class="py-20 text-center space-y-3">
      <p class="text-sm text-gray-400">
        {{ activeTag ? `No photos tagged "${activeTag}"` : 'No photos yet.' }}
      </p>
    </div>

    <!-- Lightbox -->
    <PhotoLightbox ref="lightboxRef" :photos="filteredPhotos" />
  </div>
</template>

<style scoped>
/* ── Grid layout ── */
.photo-grid {
  position: relative;
}

.photo-sizer,
.photo-item {
  width: calc(33.333% - 11px);
}

@media (max-width: 1024px) {
  .photo-sizer,
  .photo-item {
    width: calc(50% - 8px);
  }
}

@media (max-width: 640px) {
  .photo-sizer,
  .photo-item {
    width: 100%;
  }
}

.photo-item {
  margin-bottom: 16px;
}

/* ── Card ── */
.photo-card {
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background: #f4f5f7;
  outline: none;
}

.photo-card:focus-visible {
  box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.4);
}

.photo-img {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  transition:
    opacity 0.5s ease,
    transform 0.4s ease;
}

.photo-img--loaded {
  opacity: 1;
}

.photo-card:hover .photo-img {
  transform: scale(1.03);
}

/* ── Overlay ── */
.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 45%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.photo-card:hover .photo-overlay {
  opacity: 1;
}

.photo-meta {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.photo-title {
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.3;
}

.photo-location {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.8125rem;
}
</style>
