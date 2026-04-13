<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { Icon } from "@iconify/vue";

const rawGlob = import.meta.glob(
  "../../public/photos/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG,WEBP}",
  { eager: false }
);

const photos = Object.keys(rawGlob).map((path) => {
  const filename = path.split("/").pop()!;
  const id = filename.replace(/\.[^.]+$/, "");
  return { id, src: `/photos/${filename}`, alt: id.replace(/[-_]/g, " ") };
});


const layout = ref<"masonry" | "grid">("masonry");


const gridRef = ref<HTMLElement | null>(null);
let msnry: any = null;
const GUTTER = 12;

async function layoutMasonry() {
  if (!gridRef.value || !import.meta.client) return;
  msnry?.destroy?.();
  const [{ default: Masonry }, { default: imagesLoaded }] = await Promise.all([
    import("masonry-layout"),
    import("imagesloaded"),
  ]);
  msnry = new Masonry(gridRef.value, {
    itemSelector: ".photo-item",
    columnWidth: ".photo-sizer",
    percentPosition: true,
    gutter: GUTTER,
    transitionDuration: "0.25s",
  });
  imagesLoaded(gridRef.value).on("progress", () => msnry?.layout?.());
}

onMounted(() => layoutMasonry());
onBeforeUnmount(() => { msnry?.destroy?.(); msnry = null; closeLight(); });
watch(layout, (val) => {
  if (val === "masonry") nextTick(() => layoutMasonry());
  else { msnry?.destroy?.(); msnry = null; }
});


const loaded = reactive(new Set<string>());
function onImageLoad(id: string) { loaded.add(id); }


const lightIndex = ref<number | null>(null);

function openLight(i: number) {
  lightIndex.value = i;
  document.body.style.overflow = "hidden";
}

function closeLight() {
  lightIndex.value = null;
  document.body.style.overflow = "";
}

function prev() {
  if (lightIndex.value === null) return;
  lightIndex.value = (lightIndex.value - 1 + photos.length) % photos.length;
}

function next() {
  if (lightIndex.value === null) return;
  lightIndex.value = (lightIndex.value + 1) % photos.length;
}

function onKeydown(e: KeyboardEvent) {
  if (lightIndex.value === null) return;
  if (e.key === "Escape") closeLight();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
}

const currentPhoto = computed(() =>
  lightIndex.value !== null ? photos[lightIndex.value] ?? null : null
);

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <div class="photo-gallery">
    <!-- Layout toggle -->
    <div class="flex justify-end mb-6">
      <button
        @click="layout = layout === 'masonry' ? 'grid' : 'masonry'"
        class="p-2 rounded-lg text-gray-400 dark:text-zinc-500 hover:text-gray-700 dark:hover:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        :aria-label="layout === 'masonry' ? 'Switch to grid layout' : 'Switch to masonry layout'"
      >
        <Icon
          :icon="layout === 'masonry' ? 'ph:squares-four-duotone' : 'ph:rows-duotone'"
          width="20"
          height="20"
        />
      </button>
    </div>

    <!-- Masonry layout -->
    <div v-if="layout === 'masonry'" ref="gridRef" class="photo-grid">
      <div class="photo-sizer" />
      <div
        v-for="(photo, i) in photos"
        :key="photo.id"
        class="photo-item"
        @click="openLight(i)"
      >
        <div class="photo-card">
          <img
            :src="photo.src"
            :alt="photo.alt"
            loading="lazy"
            decoding="async"
            class="photo-img"
            :class="{ 'photo-img--loaded': loaded.has(photo.id) }"
            @load="onImageLoad(photo.id)"
          />
        </div>
      </div>
    </div>

    <!-- Uniform grid layout -->
    <div v-else class="photo-uniform-grid">
      <div
        v-for="(photo, i) in photos"
        :key="photo.id"
        class="photo-uniform-item"
        @click="openLight(i)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          decoding="async"
          class="photo-img photo-img--cover"
          :class="{ 'photo-img--loaded': loaded.has(photo.id) }"
          @load="onImageLoad(photo.id)"
        />
      </div>
    </div>

    <div v-if="photos.length === 0" class="py-20 text-center">
      <p class="text-sm text-gray-400 dark:text-zinc-500">
        No photos yet. Drop images into <code>public/photos/</code> to get started.
      </p>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="light">
        <div
          v-if="lightIndex !== null"
          class="lightbox"
          @click.self="closeLight"
          role="dialog"
          aria-modal="true"
        >
          <!-- Close -->
          <button class="light-btn light-btn--close" @click="closeLight" aria-label="Close">
            <Icon icon="ph:x-bold" width="20" height="20" />
          </button>

          <!-- Prev -->
          <button
            v-if="photos.length > 1"
            class="light-btn light-btn--prev"
            @click="prev"
            aria-label="Previous photo"
          >
            <Icon icon="ph:arrow-left-bold" width="20" height="20" />
          </button>

          <!-- Image -->
          <div class="light-img-wrap" @click.self="closeLight">
            <img
              v-if="currentPhoto"
              :src="currentPhoto.src"
              :alt="currentPhoto.alt"
              class="light-img"
            />
          </div>

          <!-- Next -->
          <button
            v-if="photos.length > 1"
            class="light-btn light-btn--next"
            @click="next"
            aria-label="Next photo"
          >
            <Icon icon="ph:arrow-right-bold" width="20" height="20" />
          </button>

          <!-- Counter -->
          <div class="light-counter" v-if="photos.length > 1">
            {{ lightIndex + 1 }} / {{ photos.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>

.photo-grid { position: relative; }

.photo-sizer,
.photo-item { width: calc(33.333% - 8px); }

@media (max-width: 1024px) {
  .photo-sizer, .photo-item { width: calc(50% - 6px); }
}
@media (max-width: 640px) {
  .photo-sizer, .photo-item { width: 100%; }
}

.photo-item {
  display: block;
  margin-bottom: 12px;
  cursor: pointer;
}

.photo-card { overflow: hidden; background: #f4f5f7; }

/* ── Uniform grid ── */
.photo-uniform-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 1024px) {
  .photo-uniform-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .photo-uniform-grid { grid-template-columns: 1fr; }
}

.photo-uniform-item {
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f4f5f7;
  cursor: pointer;
}

/* ── Images ── */
.photo-img {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.3s ease;
}

.photo-img--cover { height: 100%; object-fit: cover; }
.photo-img--loaded { opacity: 1; }

.photo-item:hover .photo-img,
.photo-uniform-item:hover .photo-img { transform: scale(1.03); }


.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  padding: 1rem;
}

.light-img-wrap {
  max-width: min(90vw, 1200px);
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.light-img {
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
}

.light-btn {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.light-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  transform: scale(1.08);
}

.light-btn--close { top: 1.25rem; right: 1.25rem; }
.light-btn--prev  { left: 1.25rem; top: 50%; transform: translateY(-50%); }
.light-btn--next  { right: 1.25rem; top: 50%; transform: translateY(-50%); }

.light-btn--prev:hover { transform: translateY(-50%) scale(1.08); }
.light-btn--next:hover { transform: translateY(-50%) scale(1.08); }

.light-counter {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  font-family: monospace;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
}

/* ── Transition ── */
.light-enter-active,
.light-leave-active { transition: opacity 0.25s ease; }
.light-enter-from,
.light-leave-to { opacity: 0; }
</style>
