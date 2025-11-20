<template>
  <section class="section bg-dark-grey">
    <div class="container-custom">
      <div class="grid lg:grid-cols-5 gap-12 items-center">
        <!-- Left: Large Text -->
        <div class="lg:col-span-2">
          <h2 class="text-6xl md:text-8xl lg:text-9xl font-bold text-black">
            We Got You!
          </h2>
        </div>

        <!-- Right: Content & CTAs -->
        <div class="lg:col-span-3">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p class="text-body-lg text-gray-700 mb-6">
            Book your free consultation now. No hidden fees. No obligations. Just honest guidance.
          </p>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-4 mb-8">
            <div class="flex items-center gap-2 text-gray-700">
              <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">Free Consultation</span>
            </div>
            <div class="flex items-center gap-2 text-gray-700">
              <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">24-Hour Response</span>
            </div>
            <div class="flex items-center gap-2 text-gray-700">
              <svg class="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="font-medium">No Obligation</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/86XXXXXXXXXX?text=Hi%20GEC,%20I'm%20ready%20to%20start%20my%20journey!"
              target="_blank"
              class="btn-whatsapp justify-center"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.46-.01z" />
              </svg>
              Contact Us on WhatsApp
            </a>
            <NuxtLink to="/contact" class="btn-secondary text-center">
              Schedule Video Call
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
