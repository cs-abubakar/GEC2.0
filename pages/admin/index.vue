<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Admin Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900">GEC Admin Panel</h1>
          <NuxtLink to="/" class="text-primary-blue hover:text-primary-green">
            ← Back to Website
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Admin Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Navigation Tabs -->
      <div class="mb-8">
        <nav class="flex space-x-4 border-b">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-3 font-medium border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-primary-blue text-primary-blue'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>

      <!-- Gallery Management -->
      <div v-if="activeTab === 'gallery'" class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Gallery Management</h2>
          <button
            @click="showAddGalleryForm = true"
            class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green transition-colors"
          >
            + Add Image
          </button>
        </div>

        <!-- Add Image Form -->
        <div v-if="showAddGalleryForm" class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="font-semibold mb-4">Add New Image</h3>
          <form @submit.prevent="addGalleryImage" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Image URL</label>
              <input
                v-model="newGalleryImage.url"
                type="url"
                required
                class="w-full px-3 py-2 border rounded-lg"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Title</label>
              <input
                v-model="newGalleryImage.title"
                type="text"
                required
                class="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Caption</label>
              <input
                v-model="newGalleryImage.caption"
                type="text"
                required
                class="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Category</label>
              <select
                v-model="newGalleryImage.category"
                required
                class="w-full px-3 py-2 border rounded-lg"
              >
                <option value="students">Students</option>
                <option value="events">Events</option>
                <option value="campus">Campus Life</option>
                <option value="graduation">Graduation</option>
              </select>
            </div>
            <div class="flex gap-2">
              <button
                type="submit"
                class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green"
              >
                Add Image
              </button>
              <button
                type="button"
                @click="showAddGalleryForm = false"
                class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <!-- Gallery List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="image in galleryImages"
            :key="image.id"
            class="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              :src="image.url"
              :alt="image.title"
              class="w-full h-48 object-cover rounded mb-3"
            />
            <h3 class="font-semibold mb-1">{{ image.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ image.caption }}</p>
            <p class="text-xs text-gray-500 mb-3">Category: {{ image.category }}</p>
            <button
              @click="deleteGalleryImage(image.id)"
              class="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <!-- HSK Holders Management -->
      <div v-if="activeTab === 'hsk'" class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">HSK Top Score Holders</h2>
          <button
            @click="showAddHSKForm = true"
            class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green transition-colors"
          >
            + Add HSK Holder
          </button>
        </div>

        <!-- Add HSK Holder Form -->
        <div v-if="showAddHSKForm" class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="font-semibold mb-4">Add New HSK Holder</h3>
          <form @submit.prevent="addHSKHolder" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input
                  v-model="newHSKHolder.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Country</label>
                <input
                  v-model="newHSKHolder.country"
                  type="text"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">HSK Level</label>
                <select
                  v-model="newHSKHolder.level"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="1">HSK 1</option>
                  <option value="2">HSK 2</option>
                  <option value="3">HSK 3</option>
                  <option value="4">HSK 4</option>
                  <option value="5">HSK 5</option>
                  <option value="6">HSK 6</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Score</label>
                <input
                  v-model.number="newHSKHolder.score"
                  type="number"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                  min="0"
                  max="300"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">University</label>
                <input
                  v-model="newHSKHolder.university"
                  type="text"
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Exam Date</label>
                <input
                  v-model="newHSKHolder.examDate"
                  type="date"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Photo URL (optional)</label>
              <input
                v-model="newHSKHolder.photo"
                type="url"
                class="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Testimonial (optional)</label>
              <textarea
                v-model="newHSKHolder.testimonial"
                class="w-full px-3 py-2 border rounded-lg"
                rows="3"
              ></textarea>
            </div>
            <div class="flex gap-2">
              <button
                type="submit"
                class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green"
              >
                Add HSK Holder
              </button>
              <button
                type="button"
                @click="showAddHSKForm = false"
                class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <!-- HSK Holders List -->
        <div class="space-y-4">
          <div
            v-for="holder in hskHolders"
            :key="holder.id"
            class="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold text-lg">{{ holder.name }}</h3>
                <p class="text-sm text-gray-600">{{ holder.country }} • {{ holder.university }}</p>
                <p class="text-primary-blue font-semibold mt-2">
                  HSK {{ holder.level }} - Score: {{ holder.score }}/300
                </p>
                <p class="text-xs text-gray-500 mt-1">Exam Date: {{ holder.examDate }}</p>
              </div>
              <button
                @click="deleteHSKHolder(holder.id)"
                class="text-red-600 hover:text-red-800 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Management -->
      <div v-if="activeTab === 'blog'" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Blog Management</h2>
        <p class="text-gray-600">
          Blog posts are managed as Vue files in the <code class="bg-gray-100 px-2 py-1 rounded">/pages/blog/</code> directory.
          To add a new blog post, create a new Vue file in that directory.
        </p>
      </div>

      <!-- Settings -->
      <div v-if="activeTab === 'settings'" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Settings</h2>
        <p class="text-gray-600">
          Settings and configuration options will be available here.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'Admin Panel - GEC Pathways',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const tabs = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'hsk', label: 'HSK Holders' },
  { id: 'blog', label: 'Blog' },
  { id: 'settings', label: 'Settings' }
]

const activeTab = ref('gallery')
const showAddGalleryForm = ref(false)
const showAddHSKForm = ref(false)

// Gallery Management
const galleryImages = ref([])
const newGalleryImage = ref({
  url: '',
  title: '',
  caption: '',
  category: 'students'
})

const fetchGalleryImages = async () => {
  try {
    const response = await fetch('/api/gallery')
    if (response.ok) {
      galleryImages.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch gallery:', error)
  }
}

const addGalleryImage = async () => {
  try {
    const response = await fetch('/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGalleryImage.value)
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        galleryImages.value.unshift(result.data)
        newGalleryImage.value = {
          url: '',
          title: '',
          caption: '',
          category: 'students'
        }
        showAddGalleryForm.value = false
        alert('Image added successfully!')
      }
    }
  } catch (error) {
    console.error('Failed to add image:', error)
    alert('Failed to add image')
  }
}

const deleteGalleryImage = async (id) => {
  if (!confirm('Are you sure you want to delete this image?')) return

  try {
    const response = await fetch(`/api/gallery/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        galleryImages.value = galleryImages.value.filter(img => img.id !== id)
        alert('Image deleted successfully!')
      }
    }
  } catch (error) {
    console.error('Failed to delete image:', error)
    alert('Failed to delete image')
  }
}

// HSK Holders Management
const hskHolders = ref([])
const newHSKHolder = ref({
  name: '',
  country: '',
  level: '4',
  score: 0,
  university: '',
  examDate: '',
  photo: '',
  testimonial: ''
})

const fetchHSKHolders = async () => {
  try {
    const response = await fetch('/api/hsk-holders')
    if (response.ok) {
      hskHolders.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch HSK holders:', error)
  }
}

const addHSKHolder = async () => {
  try {
    const response = await fetch('/api/hsk-holders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHSKHolder.value)
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        hskHolders.value.unshift(result.data)
        newHSKHolder.value = {
          name: '',
          country: '',
          level: '4',
          score: 0,
          university: '',
          examDate: '',
          photo: '',
          testimonial: ''
        }
        showAddHSKForm.value = false
        alert('HSK holder added successfully!')
      }
    }
  } catch (error) {
    console.error('Failed to add HSK holder:', error)
    alert('Failed to add HSK holder')
  }
}

const deleteHSKHolder = async (id) => {
  if (!confirm('Are you sure you want to delete this HSK holder?')) return

  try {
    const response = await fetch(`/api/hsk-holders/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      hskHolders.value = hskHolders.value.filter(h => h.id !== id)
      alert('HSK holder deleted successfully!')
    }
  } catch (error) {
    console.error('Failed to delete HSK holder:', error)
    alert('Failed to delete HSK holder')
  }
}

// Load data on mount
onMounted(() => {
  fetchGalleryImages()
  fetchHSKHolders()
})

// Watch activeTab to load data
watch(activeTab, (newTab) => {
  if (newTab === 'gallery') fetchGalleryImages()
  if (newTab === 'hsk') fetchHSKHolders()
})
</script>

<style scoped>
code {
  font-family: 'Courier New', monospace;
}
</style>
