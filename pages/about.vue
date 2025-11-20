<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-96 flex items-center overflow-hidden bg-gradient-to-r from-primary-blue to-primary-green">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="container-custom relative z-10 text-white">
        <h1 class="mb-6">Founded by Doctors, Driven by Your Success</h1>
        <p class="text-xl max-w-3xl">
          We're not just consultants—we're doctors who studied in China. We've walked your path.
        </p>
        <!-- Stats Bar -->
        <div class="flex flex-wrap gap-8 mt-8">
          <div class="text-center">
            <div class="text-4xl font-bold">500+</div>
            <div class="text-sm opacity-90">Students</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold">3</div>
            <div class="text-sm opacity-90">Doctors</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold">8</div>
            <div class="text-sm opacity-90">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="mb-6">Why We Started GEC</h2>
            <div class="space-y-4 text-gray-700">
              <p>
                In 2017, Dr. Sohail, Dr. Amir, and Dr. Adnan completed their MBBS degrees in China. They experienced firsthand the challenges international students face—language barriers, cultural adjustments, and navigating complex university systems.
              </p>
              <p>
                They saw too many talented students struggle because they lacked proper guidance. Some fell victim to scam agencies. Others gave up their dreams due to misinformation.
              </p>
              <p>
                That's why GEC was born—to provide honest, expert guidance from people who truly understand the journey.
              </p>
              <p>
                Today, we're based in Jingzhou, China, with direct partnerships with 15+ top universities. We're not remote agents sending emails—we're on the ground, ready to support you.
              </p>
            </div>
            <NuxtLink to="/contact" class="btn-primary mt-6 inline-block">Contact Us</NuxtLink>
          </div>
          <div>
            <div class="aspect-square bg-gradient-to-br from-primary-blue/20 to-primary-green/20 rounded-2xl flex items-center justify-center">
              <div class="text-center p-8">
                <div class="text-6xl mb-4">🏢</div>
                <p class="text-lg font-semibold">Office Photo</p>
                <p class="text-sm text-gray-600 mt-2">GEC Team in Jingzhou</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Founders -->
    <section class="section bg-light-grey">
      <div class="container-custom">
        <h2 class="text-center mb-12">Meet the Founders</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="founder in founders" :key="founder.name" class="card text-center p-8">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-blue/20 to-primary-green/20 flex items-center justify-center">
              <span class="text-5xl">👨‍⚕️</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ founder.name }}</h3>
            <p class="text-primary-blue font-medium mb-4">{{ founder.role }}</p>
            <div class="text-left text-sm text-gray-700 space-y-2">
              <p><strong>Education:</strong> {{ founder.education }}</p>
              <p><strong>Expertise:</strong> {{ founder.expertise }}</p>
              <p class="italic">"{{ founder.quote }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="text-center mb-12">Our Values</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
              <span class="text-3xl">{{ value.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-primary-blue text-white">
      <div class="container-custom text-center">
        <h2 class="mb-6 text-white">Ready to Start Your Journey?</h2>
        <p class="text-xl mb-8 opacity-90">Join 500+ students who trusted GEC for their education in China</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/86XXXXXXXXXX" target="_blank" class="btn-whatsapp">Contact on WhatsApp</a>
          <NuxtLink to="/contact" class="btn-secondary bg-white text-primary-blue border-white hover:bg-gray-100">Schedule Consultation</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - GEC Pathways | Doctor-Led Education Consultancy',
  meta: [
    {
      name: 'description',
      content: 'Founded by doctors who studied in China. GEC Pathways provides expert guidance for international students. Meet our team and learn our story.'
    }
  ]
})

const founders = [
  {
    name: 'Dr. Sohail Ahmed',
    role: 'Founder & Lead Consultant',
    education: 'MBBS, Yangtze University (2013-2019)',
    expertise: 'Medical Program Placement, Visa Processing, University Partnerships',
    quote: "I remember my first day in China—confused, anxious, and alone. That's why I founded GEC."
  },
  {
    name: 'Dr. Amir Khan',
    role: 'Co-Founder, Visa Specialist',
    education: 'MBBS, Jiangsu University (2014-2020)',
    expertise: 'Visa Processing, Embassy Relations, Document Preparation',
    quote: 'Every student deserves transparent guidance without hidden fees or false promises.'
  },
  {
    name: 'Dr. Adnan Ali',
    role: 'Co-Founder, Test Prep Director',
    education: 'MBBS, China Medical University (2013-2019)',
    expertise: 'HSK Preparation, Language Training, Student Success',
    quote: 'Language barriers should never stop talented students from achieving their dreams.'
  }
]

const values = [
  {
    icon: '🛡️',
    title: 'Transparency',
    description: 'No hidden fees. Clear communication. Honest advice.'
  },
  {
    icon: '🩺',
    title: 'Expertise',
    description: "Doctor-led guidance. We've been students in China."
  },
  {
    icon: '🤝',
    title: 'Support',
    description: '24/7 availability. From application to graduation.'
  },
  {
    icon: '🏆',
    title: 'Success',
    description: '95% visa success rate. 500+ satisfied students.'
  }
]
</script>
