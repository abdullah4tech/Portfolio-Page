<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
import type { Photo } from "~/data/photos";

const props = defineProps<{
  photos: Photo[];
  galleryId?: string;
}>();

const id = props.galleryId ?? "pswp-gallery";
let lightbox: PhotoSwipeLightbox | null = null;

function open(index: number) {
  lightbox?.loadAndOpen(index);
}

function initLightbox() {
  if (lightbox) lightbox.destroy();

  lightbox = new PhotoSwipeLightbox({
    dataSource: props.photos.map((p) => ({
      src: p.src,
      width: p.width,
      height: p.height,
      alt: p.alt,
    })),
    pswpModule: PhotoSwipe,

    bgOpacity: 0.97,
    spacing: 0.08,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,

    maxZoomLevel: 3,
    initialZoomLevel: "fit",
    secondaryZoomLevel: 2,

    showHideAnimationType: "zoom",
    showAnimationDuration: 280,
    hideAnimationDuration: 240,

    arrowKeys: true,
    escKey: true,
    wheelToZoom: true,
    padding: { top: 48, bottom: 48, left: 16, right: 16 },
  });

  /* ── Custom UI ── */
  lightbox.on("uiRegister", () => {
    if (!lightbox?.pswp?.ui) return;

    /* Download button */
    lightbox.pswp.ui.registerElement({
      name: "download-button",
      order: 8,
      isButton: true,
      tagName: "a",
      html: {
        isCustomSVG: true,
        inner:
          '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
        outlineID: "pswp__icn-download",
      },
      onInit: (el, pswp) => {
        (el as HTMLAnchorElement).setAttribute("download", "");
        (el as HTMLAnchorElement).setAttribute("target", "_blank");
        (el as HTMLAnchorElement).setAttribute("rel", "noopener");

        pswp.on("change", () => {
          const photo = props.photos[pswp.currIndex];
          if (photo) (el as HTMLAnchorElement).href = photo.src;
        });
      },
    });

    /* Photo metadata caption bar */
    lightbox.pswp.ui.registerElement({
      name: "photo-caption",
      appendTo: "wrapper",
      onInit: (el, pswp) => {
        el.style.cssText =
          "position:absolute;bottom:0;left:0;right:0;pointer-events:none;z-index:10;";

        const update = () => {
          const photo = props.photos[pswp.currIndex];
          if (!photo) {
            el.innerHTML = "";
            return;
          }
          el.innerHTML = `
            <div class="pswp-caption-bar">
              <div class="pswp-caption-text">
                ${photo.title ? `<strong>${photo.title}</strong>` : ""}
                ${
                  photo.description
                    ? `<span class="desc">${photo.description}</span>`
                    : ""
                }
                ${
                  photo.location
                    ? `<span class="loc">📍 ${photo.location}</span>`
                    : ""
                }
              </div>
              ${
                photo.exif
                  ? `<div class="pswp-exif">
                    ${
                      photo.exif.aperture
                        ? `<span>${photo.exif.aperture}</span>`
                        : ""
                    }
                    ${
                      photo.exif.shutter
                        ? `<span>${photo.exif.shutter}</span>`
                        : ""
                    }
                    ${
                      photo.exif.iso ? `<span>ISO ${photo.exif.iso}</span>` : ""
                    }
                    ${
                      photo.exif.focalLength
                        ? `<span>${photo.exif.focalLength}</span>`
                        : ""
                    }
                  </div>`
                  : ""
              }
            </div>
          `;
        };

        pswp.on("change", update);
        update();
      },
    });

    /* Image counter (e.g. "5 / 24") */
    lightbox.pswp.ui.registerElement({
      name: "photo-counter",
      appendTo: "wrapper",
      onInit: (el, pswp) => {
        el.style.cssText =
          "position:absolute;top:16px;left:16px;color:rgba(255,255,255,.7);font-size:13px;font-family:Inter,system-ui,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:.02em;z-index:10;pointer-events:none;";

        const update = () => {
          el.textContent = `${pswp.currIndex + 1} / ${pswp.getNumItems()}`;
        };
        pswp.on("change", update);
        update();
      },
    });
  });

  lightbox.init();
}

onMounted(() => initLightbox());

watch(
  () => props.photos,
  () => nextTick(() => initLightbox())
);

onBeforeUnmount(() => {
  lightbox?.destroy();
  lightbox = null;
});

defineExpose({ open });
</script>

<template>
  <!-- Hidden — PhotoSwipe renders its own overlay -->
  <div :id="id" style="display: none" />
</template>

<style>
/* ── PhotoSwipe caption bar ── */
.pswp-caption-bar {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  padding: 3.5rem 1.5rem 1.25rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.pswp-caption-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #fff;
}

.pswp-caption-text strong {
  font-size: 1.125rem;
  font-weight: 600;
}

.pswp-caption-text .desc {
  font-size: 0.875rem;
  opacity: 0.85;
}

.pswp-caption-text .loc {
  font-size: 0.8125rem;
  opacity: 0.65;
}

.pswp-exif {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pswp-exif span {
  font-family: "Fira Code", "SF Mono", monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

/* Counter position tweak — sit to the right of the close button area */
.pswp__counter {
  display: none !important; /* hide default, we use custom */
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .pswp-caption-bar {
    padding: 2.5rem 1rem 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .pswp-caption-text strong {
    font-size: 1rem;
  }

  .pswp-exif {
    gap: 0.375rem;
  }
}
</style>
