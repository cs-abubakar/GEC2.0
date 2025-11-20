<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global SEO and meta configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>
