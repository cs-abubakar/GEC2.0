<template>
  <section class="section bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="mb-4">Find Information for Your Country</h2>
        <p class="text-body-lg text-gray-600">
          Tailored guidance for students from 13+ countries
        </p>
      </div>

      <!-- Countries Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Pakistan (Active) -->
        <NuxtLink
          to="/countries/pakistan"
          class="card card-hover text-center p-6 border-2 border-primary-green hover:border-primary-blue transition-all"
        >
          <div class="text-6xl mb-4">🇵🇰</div>
          <h3 class="text-lg font-semibold mb-2">Pakistan</h3>
          <p class="text-sm text-gray-600 mb-3">200+ students placed</p>
          <span class="btn-primary w-full text-sm">View Pakistan Guide</span>
        </NuxtLink>

        <!-- Coming Soon Countries -->
        <div
          v-for="country in comingSoonCountries"
          :key="country.code"
          class="card text-center p-6 opacity-60 cursor-not-allowed"
        >
          <div class="text-6xl mb-4">{{ country.flag }}</div>
          <h3 class="text-lg font-semibold mb-2">{{ country.name }}</h3>
          <span class="inline-block text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-3">Coming Soon</span>
          <button class="btn-secondary w-full text-sm opacity-50 cursor-not-allowed" disabled>
            Launching Soon
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
