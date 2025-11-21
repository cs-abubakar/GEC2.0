<template>
  <header class="sticky top-0 z-40 bg-white shadow-sm">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
            GEC
          </div>
          <span class="font-syne font-bold text-xl hidden sm:block">GEC Pathways</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>

          <!-- Programs Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Programs
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <NuxtLink to="/programs/mbbs" class="dropdown-link">MBBS</NuxtLink>
              <NuxtLink to="/programs/bds" class="dropdown-link">BDS</NuxtLink>
              <NuxtLink to="/programs/computer-science" class="dropdown-link">Computer Science</NuxtLink>
              <NuxtLink to="/programs/engineering" class="dropdown-link">Engineering</NuxtLink>
              <NuxtLink to="/programs/business" class="dropdown-link">Business</NuxtLink>
              <NuxtLink to="/programs/language" class="dropdown-link">Language Programs</NuxtLink>
              <NuxtLink to="/programs/nursing" class="dropdown-link">Nursing</NuxtLink>
              <NuxtLink to="/programs/ai" class="dropdown-link">Artificial Intelligence</NuxtLink>
            </div>
          </div>

          <!-- Countries Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Countries
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <NuxtLink to="/countries/pakistan" class="dropdown-link">🇵🇰 Pakistan</NuxtLink>
              <span class="dropdown-link text-gray-400 cursor-not-allowed">🇮🇳 India (Coming Soon)</span>
              <span class="dropdown-link text-gray-400 cursor-not-allowed">🇧🇩 Bangladesh (Coming Soon)</span>
              <span class="dropdown-link text-gray-400 cursor-not-allowed">🇸🇦 Saudi Arabia (Coming Soon)</span>
            </div>
          </div>

          <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
          <NuxtLink to="/scholarships" class="nav-link">Scholarships</NuxtLink>
          <NuxtLink to="/why-china" class="nav-link">Why China</NuxtLink>
          <NuxtLink to="/success-stories" class="nav-link">Success Stories</NuxtLink>
          <NuxtLink to="/gallery" class="nav-link">Gallery</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/contact" class="btn-primary text-sm">Apply Now</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden py-4 border-t border-gray-100"
      >
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" class="mobile-link" @click="mobileMenuOpen = false">Home</NuxtLink>

          <!-- Mobile Programs -->
          <div>
            <button @click="programsOpen = !programsOpen" class="mobile-link w-full flex items-center justify-between">
              Programs
              <svg class="w-4 h-4" :class="{'rotate-180': programsOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="programsOpen" class="pl-4 mt-2 flex flex-col gap-2">
              <NuxtLink to="/programs/mbbs" class="mobile-link text-sm" @click="mobileMenuOpen = false">MBBS</NuxtLink>
              <NuxtLink to="/programs/bds" class="mobile-link text-sm" @click="mobileMenuOpen = false">BDS</NuxtLink>
              <NuxtLink to="/programs/computer-science" class="mobile-link text-sm" @click="mobileMenuOpen = false">Computer Science</NuxtLink>
              <NuxtLink to="/programs/engineering" class="mobile-link text-sm" @click="mobileMenuOpen = false">Engineering</NuxtLink>
            </div>
          </div>

          <!-- Mobile Countries -->
          <div>
            <button @click="countriesOpen = !countriesOpen" class="mobile-link w-full flex items-center justify-between">
              Countries
              <svg class="w-4 h-4" :class="{'rotate-180': countriesOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="countriesOpen" class="pl-4 mt-2 flex flex-col gap-2">
              <NuxtLink to="/countries/pakistan" class="mobile-link text-sm" @click="mobileMenuOpen = false">🇵🇰 Pakistan</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/services" class="mobile-link" @click="mobileMenuOpen = false">Services</NuxtLink>
          <NuxtLink to="/scholarships" class="mobile-link" @click="mobileMenuOpen = false">Scholarships</NuxtLink>
          <NuxtLink to="/why-china" class="mobile-link" @click="mobileMenuOpen = false">Why China</NuxtLink>
          <NuxtLink to="/success-stories" class="mobile-link" @click="mobileMenuOpen = false">Success Stories</NuxtLink>
          <NuxtLink to="/gallery" class="mobile-link" @click="mobileMenuOpen = false">Gallery</NuxtLink>
          <NuxtLink to="/blog" class="mobile-link" @click="mobileMenuOpen = false">Blog</NuxtLink>
          <NuxtLink to="/contact" class="btn-primary w-full mt-4" @click="mobileMenuOpen = false">Apply Now</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const programsOpen = ref(false)
const countriesOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-blue font-medium transition-colors cursor-pointer;
}

.dropdown-link {
  @apply block px-4 py-2 text-gray-700 hover:bg-light-grey transition-colors;
}

.mobile-link {
  @apply text-gray-700 hover:text-primary-blue font-medium transition-colors;
}
</style>
