<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      scrolled ? 'glass shadow-xl-soft' : 'bg-white/95 backdrop-blur-md'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo - Just GEC -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-button">
            <span class="relative z-10">GEC</span>
            <div class="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-teal rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span class="font-bold text-2xl bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent hidden sm:block">GEC</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink to="/" class="nav-link group">
            <span>Home</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>

          <!-- Programs Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Programs
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-72 glass rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 shadow-xl-soft transform group-hover:translate-y-0 translate-y-2">
              <NuxtLink to="/programs/mbbs" class="dropdown-link">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white text-xl">🩺</div>
                <div>
                  <div class="font-semibold text-slate-900">MBBS</div>
                  <div class="text-xs text-slate-500">Medical Degree in China</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/programs/bds" class="dropdown-link">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-emerald flex items-center justify-center text-white text-xl">🦷</div>
                <div>
                  <div class="font-semibold text-slate-900">BDS</div>
                  <div class="text-xs text-slate-500">Dental Surgery</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/programs/computer-science" class="dropdown-link">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white text-xl">💻</div>
                <div>
                  <div class="font-semibold text-slate-900">Computer Science</div>
                  <div class="text-xs text-slate-500">Tech & Programming</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/programs/engineering" class="dropdown-link">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-white text-xl">⚙️</div>
                <div>
                  <div class="font-semibold text-slate-900">Engineering</div>
                  <div class="text-xs text-slate-500">Various Fields</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Countries Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Countries
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-64 glass rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 shadow-xl-soft transform group-hover:translate-y-0 translate-y-2">
              <NuxtLink to="/countries/pakistan" class="dropdown-link">
                <span class="text-3xl">🇵🇰</span>
                <div>
                  <div class="font-semibold text-slate-900">Pakistan</div>
                  <div class="text-xs text-slate-500">500+ Students</div>
                </div>
              </NuxtLink>
              <div class="dropdown-link opacity-50 cursor-not-allowed">
                <span class="text-3xl">🇮🇳</span>
                <div>
                  <div class="font-semibold text-slate-900">India</div>
                  <div class="text-xs text-brand-blue">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink to="/services" class="nav-link group">
            <span>Services</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/scholarships" class="nav-link group">
            <span>Scholarships</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/success-stories" class="nav-link group">
            <span>Success</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/gallery" class="nav-link group">
            <span>Gallery</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/blog" class="nav-link group">
            <span>Blog</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary text-sm">
            Apply Now
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden relative w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors group"
        >
          <div class="relative w-6 h-5 flex flex-col justify-between">
            <span
              :class="[
                'block h-0.5 w-full bg-brand-ocean transition-all duration-300 rounded-full',
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              ]"
            ></span>
            <span
              :class="[
                'block h-0.5 w-full bg-brand-ocean transition-all duration-300 rounded-full',
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              ]"
            ></span>
            <span
              :class="[
                'block h-0.5 w-full bg-brand-ocean transition-all duration-300 rounded-full',
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              ]"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        :class="[
          'lg:hidden overflow-hidden transition-all duration-300',
          mobileMenuOpen ? 'max-h-screen py-6 border-t border-slate-100' : 'max-h-0'
        ]"
      >
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" class="mobile-link" @click="mobileMenuOpen = false">🏠 Home</NuxtLink>

          <!-- Mobile Programs -->
          <div>
            <button @click="programsOpen = !programsOpen" class="mobile-link w-full flex items-center justify-between">
              <span>📚 Programs</span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="{'rotate-180': programsOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="programsOpen" class="pl-6 mt-3 flex flex-col gap-3 animate-fade-in-down">
              <NuxtLink to="/programs/mbbs" class="mobile-link text-sm flex items-center gap-2" @click="mobileMenuOpen = false">
                <span>🩺</span> MBBS
              </NuxtLink>
              <NuxtLink to="/programs/bds" class="mobile-link text-sm flex items-center gap-2" @click="mobileMenuOpen = false">
                <span>🦷</span> BDS
              </NuxtLink>
              <NuxtLink to="/programs/computer-science" class="mobile-link text-sm flex items-center gap-2" @click="mobileMenuOpen = false">
                <span>💻</span> Computer Science
              </NuxtLink>
              <NuxtLink to="/programs/engineering" class="mobile-link text-sm flex items-center gap-2" @click="mobileMenuOpen = false">
                <span>⚙️</span> Engineering
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile Countries -->
          <div>
            <button @click="countriesOpen = !countriesOpen" class="mobile-link w-full flex items-center justify-between">
              <span>🌍 Countries</span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="{'rotate-180': countriesOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="countriesOpen" class="pl-6 mt-3 flex flex-col gap-3 animate-fade-in-down">
              <NuxtLink to="/countries/pakistan" class="mobile-link text-sm flex items-center gap-2" @click="mobileMenuOpen = false">
                🇵🇰 Pakistan
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/services" class="mobile-link" @click="mobileMenuOpen = false">🎯 Services</NuxtLink>
          <NuxtLink to="/scholarships" class="mobile-link" @click="mobileMenuOpen = false">💰 Scholarships</NuxtLink>
          <NuxtLink to="/success-stories" class="mobile-link" @click="mobileMenuOpen = false">⭐ Success Stories</NuxtLink>
          <NuxtLink to="/gallery" class="mobile-link" @click="mobileMenuOpen = false">📸 Gallery</NuxtLink>
          <NuxtLink to="/blog" class="mobile-link" @click="mobileMenuOpen = false">📝 Blog</NuxtLink>

          <NuxtLink to="/contact" class="btn-primary w-full mt-4 justify-center" @click="mobileMenuOpen = false">
            Apply Now
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const programsOpen = ref(false)
const countriesOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply relative text-slate-700 hover:text-brand-blue font-medium transition-colors cursor-pointer;
}

.dropdown-link {
  @apply flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-brand-blue/5 hover:to-brand-purple/5 transition-all cursor-pointer rounded-xl mx-2;
}

.mobile-link {
  @apply text-slate-700 hover:text-brand-blue font-medium transition-colors py-2;
}
</style>
