<template>
  <section class="relative h-screen min-h-[600px] flex items-center overflow-hidden">
    <!-- Background Slider -->
    <div class="absolute inset-0 z-0">
      <div class="relative w-full h-full">
        <!-- Background Images (Placeholder - replace with actual images) -->
        <div
          v-for="(image, index) in backgroundImages"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-1000', currentSlide === index ? 'opacity-100' : 'opacity-0']"
        >
          <div
            class="w-full h-full bg-cover bg-center"
            :style="`background-image: url('${image}'); animation: kenBurns 20s ease-in-out infinite;`"
          ></div>
        </div>
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-5 gap-12 items-center">
        <!-- Left Content (60%) -->
        <div class="lg:col-span-3 text-white">
          <!-- Logo Badge -->
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span class="text-2xl">🇨🇳</span>
            <span class="font-semibold">GEC Pathways</span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Study. Explore. <br />
            <span class="text-accent-yellow">Succeed</span> — in China.
          </h1>

          <!-- Sub-headline -->
          <p class="text-xl md:text-2xl mb-6 text-gray-200">
            Expert guidance from 50+ professionals • 500+ successful students<br />
            With offices in different countries, based in China
          </p>

          <!-- Trust Micro-Badges -->
          <div class="flex flex-wrap gap-4 mb-8">
            <div class="trust-badge bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <svg class="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              50+ Expert Team
            </div>
            <div class="trust-badge bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <svg class="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              China-Based Office
            </div>
            <div class="trust-badge bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <svg class="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              95% Visa Success
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/86XXXXXXXXXX?text=Hi%20GEC,%20I'm%20interested%20in%20studying%20in%20China" target="_blank" class="btn-primary text-center">
              <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.46-.01z" />
              </svg>
              Get Started Now
            </a>
            <NuxtLink to="/programs/mbbs" class="btn-secondary text-center bg-transparent backdrop-blur-sm">
              Explore Programs
            </NuxtLink>
          </div>
        </div>

        <!-- Right Content (40%) -->
        <div class="lg:col-span-2 hidden lg:block">
          <div class="relative">
            <!-- Placeholder for hero image or video -->
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div class="w-full h-full bg-gradient-to-br from-primary-blue/20 to-accent-purple/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                <div class="text-center text-white p-8">
                  <svg class="w-24 h-24 mx-auto mb-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p class="text-lg font-semibold">Doctor Team Photo</p>
                  <p class="text-sm text-gray-300 mt-2">Professional image placeholder</p>
                </div>
              </div>
            </div>
            <!-- Floating stats -->
            <div class="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-blue">500+</div>
                <div class="text-sm text-gray-600">Students Guided</div>
              </div>
            </div>
            <div class="absolute -top-6 -right-6 bg-accent-yellow rounded-lg shadow-xl p-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-black">95%</div>
                <div class="text-sm text-gray-800">Visa Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Background images (placeholders)
const backgroundImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920',  // University campus
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920',  // Students studying
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920',  // Modern campus
]

const currentSlide = ref(0)
let intervalId = null

onMounted(() => {
  // Auto-rotate background images
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % backgroundImages.length
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
@keyframes kenBurns {
  0% {
    transform: scale(1) translateX(0);
  }
  50% {
    transform: scale(1.1) translateX(-2%);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}
</style>
