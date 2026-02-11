import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Remove comments and whitespace in production
          comments: false,
          whitespace: 'condense',
        },
      },
    }),
    ...(process.env.NODE_ENV === 'development' ? [vueDevTools()] : []),
    tailwindcss(),
    svgLoader({
      defaultImport: 'component',
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          'removeDimensions',
          'removeXMLNS',
        ],
      },
    }),

    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 1024,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression for even better compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    // Enable minification
    minify: 'terser',

    // Optimize terser settings for maximum compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },

    // Optimize chunk size limits
    chunkSizeWarningLimit: 1000,

    // Advanced chunking strategy
    rollupOptions: {
      output: {
        // Manual chunking for better caching using function form
        manualChunks(id) {
          // Vue core
          if (id.includes('vue-router') || id.includes('node_modules/vue/')) {
            return 'vue-vendor'
          }

          // VueUse utilities
          if (id.includes('@vueuse/core') || id.includes('@vueuse/head')) {
            return 'vueuse'
          }

          // UI libraries

          // Blog / Markdown
          if (id.includes('shiki') || id.includes('markdown-it')) {
            return 'blog-vendor'
          }

          // Giscus
          if (id.includes('@giscus')) {
            return 'giscus'
          }

          // Photo gallery
          if (
            id.includes('photoswipe') ||
            id.includes('masonry-layout') ||
            id.includes('imagesloaded')
          ) {
            return 'gallery-vendor'
          }

          // Particles (heavy library) - though removed, keeping for future
          if (id.includes('tsparticles') || id.includes('vue3-particles')) {
            return 'particles'
          }

          // Other vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },

        // Optimize file naming for caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId
                .split('/')
                .pop()
                ?.replace(/\.\w+$/, '')
            : 'chunk'
          return `js/[name]-[hash].js`
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name]-[hash].css'
          }
          return 'assets/[name]-[hash].[ext]'
        },
      },

      // External dependencies that should not be bundled
      external: [],
    },

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Generate source maps for debugging (disable in production for smaller builds)
    sourcemap: process.env.NODE_ENV === 'development',

    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB

    // Report compressed size
    reportCompressedSize: false,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
      'markdown-it',
      'photoswipe',
      'masonry-layout',
      'imagesloaded',
    ],
    exclude: ['tsparticles', 'vue3-particles'],
  },

  // Server configuration for development
  server: {
    fs: {
      strict: true,
    },
  },

  // CSS optimization
  css: {
    devSourcemap: process.env.NODE_ENV === 'development',
  },

  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl: (filename) => {
      // Use relative URLs for better CDN compatibility
      return './' + filename
    },
  },
})
