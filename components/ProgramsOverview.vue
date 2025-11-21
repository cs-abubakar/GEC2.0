<template>
  <section class="section bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-semibold mb-4">
          <span class="text-xl">🎓</span>
          <span>Academic Excellence</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Explore Our Programs
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          From MBBS to AI, find the perfect program to launch your global career
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Program Card 1: MBBS (Highlighted) -->
        <div class="group relative col-span-1 md:col-span-2 lg:col-span-2 card card-hover p-8 scroll-reveal overflow-hidden">
          <!-- Decorative Background -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-full blur-3xl"></div>

          <!-- Popular Badge -->
          <div class="absolute top-6 right-6 z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-amber to-brand-orange text-white font-semibold text-sm shadow-button animate-bounce-subtle">
              <span>🏆</span>
              <span>Most Popular</span>
            </div>
          </div>

          <div class="relative z-10">
            <!-- Icon Container -->
            <div class="relative aspect-video bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-teal/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div class="text-8xl animate-bounce-subtle">🩺</div>
              <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-purple/20 rounded-2xl"></div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="badge badge-primary">5-6 Years</span>
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-amber/10 text-brand-amber">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                95% Visa Success
              </span>
              <span class="badge badge-success">English Taught</span>
            </div>

            <h3 class="text-3xl font-bold mb-4 text-brand-ocean">MBBS (Bachelor of Medicine & Surgery)</h3>

            <!-- Features List -->
            <ul class="space-y-3 mb-6 text-slate-700">
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>WHO & PMC Recognized</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>English-Medium Programs</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Clinical Rotations from Year 3</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-brand-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Affordable Tuition (50% less than Western countries)</span>
              </li>
            </ul>

            <!-- CTA Section -->
            <div class="flex justify-end gap-4 pt-4 border-t border-slate-100">
              <NuxtLink to="/programs/mbbs" class="btn-primary">
                Explore MBBS
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Program Cards 2-8 -->
        <div
          v-for="(program, index) in otherPrograms"
          :key="program.slug"
          class="group card card-hover p-6 flex flex-col relative overflow-hidden scroll-reveal"
          :class="`animate-fade-in animation-delay-${Math.min(index + 1, 5) * 100}`"
        >
          <!-- Decorative Background -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

          <!-- Badge -->
          <div v-if="program.badge" class="absolute top-4 right-4 z-10">
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold">
              <span>⭐</span>
              {{ program.badge }}
            </span>
          </div>

          <div class="relative z-10">
            <!-- Icon Container -->
            <div class="aspect-video bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div class="text-6xl group-hover:scale-110 transition-transform duration-300">{{ program.icon }}</div>
            </div>

            <!-- Duration Badge -->
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="badge bg-slate-100 text-slate-700">{{ program.duration }}</span>
            </div>

            <h3 class="text-xl font-bold mb-3 text-brand-ocean group-hover:text-brand-blue transition-colors">{{ program.title }}</h3>

            <!-- Features List -->
            <ul class="space-y-2 mb-4 text-sm text-slate-700 flex-grow">
              <li v-for="(feature, idx) in program.features" :key="idx" class="flex items-start gap-2">
                <div class="w-5 h-5 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="leading-snug">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Section -->
            <div class="mt-auto pt-4 border-t border-slate-100">
              <NuxtLink :to="`/programs/${program.slug}`" class="btn-secondary w-full text-center inline-flex items-center justify-center gap-2">
                Learn More
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use scroll reveal composable for animations
useScrollReveal()

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
    ]
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
