<template>
  <section class="section bg-gradient-to-r from-light-grey to-white">
    <div class="container-custom">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Stat 1 -->
        <div class="stat-card">
          <div class="flex justify-center mb-3">
            <svg class="w-12 h-12 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div class="stat-number" ref="stat1">0</div>
          <div class="stat-label">Students Guided</div>
        </div>

        <!-- Stat 2 -->
        <div class="stat-card">
          <div class="flex justify-center mb-3">
            <svg class="w-12 h-12 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div class="stat-number text-primary-green" ref="stat2">0</div>
          <div class="stat-label">Doctors on Team</div>
        </div>

        <!-- Stat 3 -->
        <div class="stat-card">
          <div class="flex justify-center mb-3">
            <svg class="w-12 h-12 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="stat-number text-accent-yellow" ref="stat3">0</div>
          <div class="stat-label">Visa Success Rate</div>
        </div>

        <!-- Stat 4 -->
        <div class="stat-card">
          <div class="flex justify-center mb-3">
            <svg class="w-12 h-12 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div class="stat-number" ref="stat4">0</div>
          <div class="stat-label">Partner Universities</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)
const stat4 = ref(null)

const animateValue = (element, start, end, duration, suffix = '') => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const value = Math.floor(progress * (end - start) + start)
    element.textContent = value + suffix
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  // Intersection Observer for scroll-triggered animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(stat1.value, 0, 500, 2000, '+')
        animateValue(stat2.value, 0, 3, 2000)
        animateValue(stat3.value, 0, 95, 2000, '%')
        animateValue(stat4.value, 0, 15, 2000, '+')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  if (stat1.value) {
    observer.observe(stat1.value.parentElement.parentElement)
  }
})
</script>
