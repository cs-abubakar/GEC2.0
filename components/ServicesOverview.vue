<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="service in services" :key="service.title" class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 text-sm">{{ service.description }}</p>
        </div>
      </div>
      <div class="text-center mt-12">
        <NuxtLink to="/services" class="btn-secondary">View All Services</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'University Placement',
    description: 'Expert matching • Application support • Admission success',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Visa Assistance',
    description: 'Document prep • Interview coaching • 95% success rate',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'Test Preparation (HSK)',
    description: 'HSK 3-6 courses • Mock exams • Award ceremonies',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Initial Settlement',
    description: 'Airport pickup • SIM/Bank setup • Accommodation support',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  }
]
</script>
