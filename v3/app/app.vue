<template>
  <FractalBackground />
  <div
    class="relative z-10 min-h-screen bg-transparent text-gray-700 dark:text-gray-300 font-sans sm:pl-[72px]"
  >
    <DesktopNav />
    <MobileBottomNav />

    <main
      class="max-w-4xl lg:max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-2 sm:pt-0 pb-12 sm:pb-20"
    >
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>
