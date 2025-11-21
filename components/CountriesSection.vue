<template>
  <section class="section bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-1/3 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/10 text-brand-emerald font-semibold mb-4">
          <span class="text-xl">🌍</span>
          <span>Global Presence</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-teal bg-clip-text text-transparent">
          Find Information for Your Country
        </h2>
        <p class="text-xl text-slate-600">
          Tailored guidance for students from 13+ countries
        </p>
      </div>

      <!-- Countries Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Pakistan (Active) -->
        <NuxtLink
          to="/countries/pakistan"
          class="group card card-hover text-center p-6 border-2 border-brand-emerald/20 hover:border-brand-blue relative overflow-hidden scroll-reveal"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative z-10">
            <div class="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">🇵🇰</div>
            <h3 class="text-lg font-bold mb-2 text-brand-ocean group-hover:text-brand-blue transition-colors">Pakistan</h3>
            <p class="text-sm text-slate-600 mb-4">200+ students placed</p>
            <span class="btn-primary w-full text-sm inline-flex items-center justify-center gap-2">
              View Guide
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </NuxtLink>

        <!-- Coming Soon Countries -->
        <div
          v-for="(country, index) in comingSoonCountries"
          :key="country.code"
          class="card text-center p-6 opacity-60 cursor-not-allowed scroll-reveal"
          :class="`animation-delay-${Math.min(index + 1, 5) * 100}`"
        >
          <div class="text-7xl mb-4">{{ country.flag }}</div>
          <h3 class="text-lg font-bold mb-2 text-slate-700">{{ country.name }}</h3>
          <span class="inline-block text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full mb-4 font-medium">Coming Soon</span>
          <button class="btn-secondary w-full text-sm opacity-50 cursor-not-allowed" disabled>
            Launching Soon
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use scroll reveal composable for animations
useScrollReveal()

const comingSoonCountries = [
  { name: 'India', flag: '🇮🇳', code: 'IN' },
  { name: 'Bangladesh', flag: '🇧🇩', code: 'BD' },
  { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA' },
  { name: 'Sudan', flag: '🇸🇩', code: 'SD' },
  { name: 'Morocco', flag: '🇲🇦', code: 'MA' },
  { name: 'Yemen', flag: '🇾🇪', code: 'YE' },
  { name: 'Oman', flag: '🇴🇲', code: 'OM' },
  { name: 'Uganda', flag: '🇺🇬', code: 'UG' },
  { name: 'Tanzania', flag: '🇹🇿', code: 'TZ' },
  { name: 'Cameroon', flag: '🇨🇲', code: 'CM' },
  { name: 'Ghana', flag: '🇬🇭', code: 'GH' },
  { name: 'Iran', flag: '🇮🇷', code: 'IR' }
]
</script>
