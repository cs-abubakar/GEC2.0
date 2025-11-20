<template>
  <section class="section bg-light-grey">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="mb-4">Explore Our Programs</h2>
        <p class="text-body-lg text-gray-600 max-w-3xl mx-auto">
          From MBBS to AI, find the perfect program to launch your global career
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Program Card 1: MBBS (Highlighted) -->
        <div class="program-card col-span-1 md:col-span-2 lg:col-span-2">
          <span class="program-badge">🏆 Most Popular</span>
          <div class="aspect-video bg-gradient-to-br from-primary-blue/20 to-primary-green/20 rounded-lg mb-4 flex items-center justify-center">
            <div class="text-6xl">🩺</div>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="text-xs bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full font-medium">5-6 Years</span>
            <span class="text-xs bg-accent-yellow/80 text-black px-3 py-1 rounded-full font-medium">95% Visa Success</span>
            <span class="text-xs bg-primary-green/10 text-primary-green px-3 py-1 rounded-full font-medium">English Taught</span>
          </div>
          <h3 class="text-2xl mb-3">MBBS (Bachelor of Medicine & Surgery)</h3>
          <ul class="space-y-2 mb-4 text-gray-700">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>WHO & PMDC Recognized</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>English-Medium Programs</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Clinical Rotations from Year 3</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Affordable Tuition (50% less than Western countries)</span>
            </li>
          </ul>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-primary-blue">From $4,000/year</span>
            <NuxtLink to="/programs/mbbs" class="btn-primary">Explore MBBS</NuxtLink>
          </div>
        </div>

        <!-- Program Cards 2-8 -->
        <div
          v-for="program in otherPrograms"
          :key="program.slug"
          class="program-card"
        >
          <span v-if="program.badge" class="program-badge">{{ program.badge }}</span>
          <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <div class="text-5xl">{{ program.icon }}</div>
          </div>
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">{{ program.duration }}</span>
          </div>
          <h3 class="text-xl mb-3">{{ program.title }}</h3>
          <ul class="space-y-2 mb-4 text-sm text-gray-700">
            <li v-for="(feature, idx) in program.features" :key="idx" class="flex items-start gap-2">
              <svg class="w-4 h-4 text-primary-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <div class="mt-auto">
            <span v-if="program.price" class="text-lg font-bold text-primary-blue block mb-3">{{ program.price }}</span>
            <NuxtLink :to="`/programs/${program.slug}`" class="btn-secondary w-full text-center block">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const otherPrograms = [
  {
    title: 'Language Programs',
    slug: 'language',
    icon: '📚',
    duration: '6-12 Months',
    features: [
      'HSK 3, 4, 6 Preparation',
      'Qualified Foreign Teachers',
      'Mock Exams & Cultural Activities',
      '6 Months or 1 Year Options'
    ],
    price: 'From $2,000'
  },
  {
    title: 'International Economy & Trade',
    slug: 'economy-trade',
    icon: '💼',
    duration: '4 Years',
    features: [
      'Global Business Focus',
      'Internship Opportunities',
      'English-Taught Programs',
      'Career-Ready Curriculum'
    ],
    price: ''
  },
  {
    title: 'International Relations',
    slug: 'international-relations',
    icon: '🌐',
    duration: '4 Years',
    features: [
      'Diplomatic Career Preparation',
      'Multilingual Environment',
      'Policy & Governance Focus',
      'Global Networking'
    ],
    price: ''
  },
  {
    title: 'Computer Science',
    slug: 'computer-science',
    icon: '💻',
    badge: 'High Demand',
    duration: '4 Years',
    features: [
      'AI/ML Specialization',
      'Industry-Led Projects',
      'Top-Ranked Universities',
      '95% Job Placement'
    ],
    price: ''
  },
  {
    title: 'BDS (Bachelor of Dental Surgery)',
    slug: 'bds',
    icon: '🦷',
    duration: '5 Years',
    features: [
      'Modern Facilities',
      'Clinical Training',
      'International Recognition',
      'Affordable Fees'
    ],
    price: ''
  },
  {
    title: 'Nursing',
    slug: 'nursing',
    icon: '👩‍⚕️',
    duration: '4 Years',
    features: [
      'Practical Clinical Training',
      'International Nursing Standards',
      'High Demand Globally',
      'English Programs Available'
    ],
    price: ''
  },
  {
    title: 'Artificial Intelligence',
    slug: 'ai',
    icon: '🤖',
    badge: 'Emerging Field',
    duration: '4 Years',
    features: [
      'Cutting-Edge Curriculum',
      'Research Opportunities',
      'Industry Partnerships',
      'Future-Proof Career'
    ],
    price: ''
  }
]
</script>
