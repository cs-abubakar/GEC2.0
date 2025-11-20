<template>
  <section class="section bg-black text-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="mb-4 text-white">Why China? Because Your Future Deserves the Best.</h2>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(benefit, index) in benefits" :key="index" class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-primary-blue/20 rounded-full flex items-center justify-center">
            <div class="text-3xl">{{ benefit.icon }}</div>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-white">{{ benefit.title }}</h3>
          <p class="text-gray-400 text-sm">{{ benefit.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <NuxtLink to="/why-china" class="btn-primary">
          Discover More Benefits
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    icon: '🎓',
    title: 'Quality Education',
    description: 'Top 100 global universities. WHO/PMDC recognized degrees.'
  },
  {
    icon: '💰',
    title: 'Affordable Tuition & Living',
    description: '50% lower costs than US/UK. $300-500/month living expenses.'
  },
  {
    icon: '🏆',
    title: 'Scholarship Opportunities',
    description: 'Up to 100% tuition coverage. Merit-based awards available.'
  },
  {
    icon: '🏮',
    title: 'Rich Culture & Language',
    description: 'Learn Mandarin while studying. Immerse in 5,000 years of history.'
  },
  {
    icon: '🌍',
    title: 'Global Career Opportunities',
    description: 'Chinese companies hiring worldwide. Belt & Road connections.'
  },
  {
    icon: '🏗️',
    title: 'Modern Campuses & Facilities',
    description: 'State-of-the-art labs, libraries, and student centers.'
  },
  {
    icon: '🛡️',
    title: 'Safe & Welcoming',
    description: 'Low crime rates. International student support systems.'
  },
  {
    icon: '🚀',
    title: 'Innovation Hub',
    description: "World's fastest tech growth. AI, robotics, engineering boom."
  }
]
</script>
