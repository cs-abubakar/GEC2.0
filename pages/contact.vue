<template>
  <div>
    <!-- Hero -->
    <section class="section bg-gradient-to-r from-primary-blue to-primary-green text-white text-center">
      <div class="container-custom">
        <h1 class="mb-4 text-white">Let's Start Your Journey to China</h1>
        <p class="text-xl opacity-90">Free consultation • No obligations • Expert guidance</p>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- WhatsApp -->
          <div class="card text-center p-8 card-hover">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#25D366]/10 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.46-.01z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">WhatsApp</h3>
            <p class="text-gray-600 mb-4 text-sm">Fastest response (within 2 hours)</p>
            <p class="font-medium mb-4">+86-XXX-XXXX-XXXX</p>
            <a href="https://wa.me/86XXXXXXXXXX" target="_blank" class="btn-primary w-full">Chat on WhatsApp</a>
          </div>

          <!-- Email -->
          <div class="card text-center p-8 card-hover">
            <div class="w-16 h-16 mx-auto mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Email</h3>
            <p class="text-gray-600 mb-4 text-sm">Response time: Within 24 hours</p>
            <p class="font-medium mb-4">info@gec-pathways.com</p>
            <a href="mailto:info@gec-pathways.com" class="btn-secondary w-full">Send Email</a>
          </div>

          <!-- Video Call -->
          <div class="card text-center p-8 card-hover">
            <div class="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Video Call</h3>
            <p class="text-gray-600 mb-4 text-sm">30-minute free consultation</p>
            <p class="font-medium mb-4">Zoom/WhatsApp</p>
            <button class="btn-secondary w-full">Schedule Call</button>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div class="card p-8">
            <h2 class="mb-6">Quick Application Form</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="form-label">Full Name *</label>
                <input type="text" v-model="form.name" required class="form-input" placeholder="Your full name" />
              </div>
              <div>
                <label class="form-label">Email Address *</label>
                <input type="email" v-model="form.email" required class="form-input" placeholder="your@email.com" />
              </div>
              <div>
                <label class="form-label">WhatsApp Number *</label>
                <input type="tel" v-model="form.whatsapp" required class="form-input" placeholder="+92 XXX XXXXXXX" />
              </div>
              <div>
                <label class="form-label">Country *</label>
                <select v-model="form.country" required class="form-input">
                  <option value="">Select your country</option>
                  <option value="Pakistan">🇵🇰 Pakistan</option>
                  <option value="India">🇮🇳 India</option>
                  <option value="Bangladesh">🇧🇩 Bangladesh</option>
                  <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label class="form-label">Intended Program *</label>
                <select v-model="form.program" required class="form-input">
                  <option value="">Select program</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BDS">BDS</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business">Business</option>
                  <option value="Language">Language Program</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label class="form-label">Message</label>
                <textarea v-model="form.message" rows="4" class="form-input" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">Submit Application</button>
            </form>
          </div>

          <!-- Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-semibold mb-4">What Happens Next?</h3>
              <ol class="space-y-4">
                <li class="flex gap-4">
                  <span class="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h4 class="font-semibold">We review your application</h4>
                    <p class="text-sm text-gray-600">Within 24 hours</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <span class="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h4 class="font-semibold">Our team contacts you</h4>
                    <p class="text-sm text-gray-600">Via WhatsApp or Email</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <span class="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h4 class="font-semibold">Free consultation call</h4>
                    <p class="text-sm text-gray-600">Discuss your options</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <span class="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <h4 class="font-semibold">Personalized recommendations</h4>
                    <p class="text-sm text-gray-600">Best-fit universities for you</p>
                  </div>
                </li>
                <li class="flex gap-4">
                  <span class="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <div>
                    <h4 class="font-semibold">Step-by-step guidance</h4>
                    <p class="text-sm text-gray-600">From application to arrival</p>
                  </div>
                </li>
              </ol>
            </div>

            <div class="card p-6 bg-light-grey">
              <h4 class="font-semibold mb-3">Our Office</h4>
              <div class="space-y-2 text-sm text-gray-700">
                <p class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-primary-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Offices in different countries, based in China</span>
                </p>
                <p class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-primary-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Sat: 9AM-6PM (China Time)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Contact Us - GEC Pathways | Free Consultation',
  meta: [
    {
      name: 'description',
      content: 'Contact GEC Pathways for free consultation. WhatsApp, Email, or Video Call. 24-hour response time. No obligations.'
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  whatsapp: '',
  country: '',
  program: '',
  message: ''
})

const handleSubmit = () => {
  // This would typically send to a backend API
  alert('Thank you! We will contact you within 24 hours.')
  console.log('Form submitted:', form.value)
}
</script>
