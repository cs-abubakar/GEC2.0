<template>
  <section class="section bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="mb-4">We Understand Your Fears</h2>
        <p class="text-body-lg text-gray-600 max-w-3xl mx-auto">
          Studying abroad is a big decision. We've helped 500+ students overcome these exact concerns.
        </p>
      </div>

      <!-- Desktop: Slider -->
      <div class="hidden md:block">
        <div class="relative h-96 overflow-hidden rounded-2xl">
          <!-- Slides -->
          <div
            v-for="(fear, index) in fears"
            :key="index"
            :class="['absolute inset-0 transition-all duration-700 ease-in-out', currentFear === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full']"
            :style="`background: linear-gradient(135deg, ${fear.bgColor}20 0%, ${fear.bgColor}10 100%);`"
          >
            <div class="grid md:grid-cols-2 gap-8 h-full p-12 items-center">
              <!-- Left: Content -->
              <div>
                <h3 class="mb-4">{{ fear.headline }}</h3>
                <p class="text-body-lg text-gray-700 mb-6">{{ fear.body }}</p>
                <button v-if="fear.ctaText" class="btn-secondary">
                  {{ fear.ctaText }}
                </button>
              </div>
              <!-- Right: Image Placeholder -->
              <div class="flex items-center justify-center">
                <div class="w-full h-64 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white">
                  <div class="text-center p-6">
                    <div class="text-6xl mb-4">{{ fear.icon }}</div>
                    <p class="text-gray-600 font-medium">{{ fear.imageAlt }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            <button
              v-for="(_, index) in fears"
              :key="index"
              @click="currentFear = index"
              :class="['w-3 h-3 rounded-full transition-all', currentFear === index ? 'bg-primary-blue w-8' : 'bg-gray-300']"
            ></button>
          </div>

          <!-- Arrow Navigation -->
          <button
            @click="prevFear"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextFear"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile: Stacked Cards -->
      <div class="md:hidden space-y-6">
        <div
          v-for="(fear, index) in fears"
          :key="index"
          class="card p-6"
          :style="`border-left: 4px solid ${fear.bgColor};`"
        >
          <div class="text-4xl mb-4">{{ fear.icon }}</div>
          <h3 class="text-2xl mb-3">{{ fear.headline }}</h3>
          <p class="text-gray-700 mb-4">{{ fear.body }}</p>
          <button v-if="fear.ctaText" class="btn-secondary">
            {{ fear.ctaText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentFear = ref(0)
let autoplayInterval = null

const fears = [
  {
    headline: 'Worried About Scams?',
    body: "We're registered and based in Jingzhou, China. Visit our physical office. Meet our team. We're not hiding behind emails.",
    ctaText: 'See Our Office Photos',
    icon: '🛡️',
    imageAlt: 'Professional Office',
    bgColor: '#00e4ff'
  },
  {
    headline: 'Fear of Being Alone Abroad?',
    body: "24/7 on-ground support from airport pickup to graduation. Our team lives in China—we're always here.",
    ctaText: '',
    icon: '🤝',
    imageAlt: 'Team Welcome',
    bgColor: '#deaaff'
  },
  {
    headline: 'No Hidden Fees. Ever.',
    body: "100% transparent pricing. See exact costs before you commit. No surprises, no fine print.",
    ctaText: '',
    icon: '💰',
    imageAlt: 'Transparent Pricing',
    bgColor: '#ffcbb0'
  },
  {
    headline: 'Tired of Inexperienced Agents?',
    body: "Founded by Dr. Sohail, Dr. Amir & Dr. Adnan—actual doctors who studied in China. We've been in your shoes.",
    ctaText: '',
    icon: '👨‍⚕️',
    imageAlt: 'Doctor Team',
    bgColor: '#006046'
  },
  {
    headline: 'Frustrated by Slow Responses?',
    body: "We respond within 24 hours on WhatsApp. Real humans, not bots. Try us.",
    ctaText: '',
    icon: '⚡',
    imageAlt: 'Fast Response',
    bgColor: '#fccf00'
  },
  {
    headline: 'Language Barriers Holding You Back?',
    body: "Our multilingual team speaks English, Urdu, Arabic, and Chinese. Zero language stress.",
    ctaText: '',
    icon: '🌍',
    imageAlt: 'Multilingual Team',
    bgColor: '#aed9e0'
  }
]

const nextFear = () => {
  currentFear.value = (currentFear.value + 1) % fears.length
}

const prevFear = () => {
  currentFear.value = currentFear.value === 0 ? fears.length - 1 : currentFear.value - 1
}

onMounted(() => {
  // Auto-advance slides every 5 seconds
  autoplayInterval = setInterval(nextFear, 5000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>
