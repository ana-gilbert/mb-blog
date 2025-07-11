<template>
    <NavBar></NavBar>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-pink-600 text-center mb-10">Recommendations </h1>
  
        <div v-if="loading" class="text-center text-gray-500">Loading...</div>
  
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="rec in recommendations"
            :key="rec.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden border border-rose-100 hover:shadow-pink-200 transition-shadow"
          >
            <img :src="rec.imageUrl" alt="Recommendation Image" class="w-full max-h-64 object-contain rounded-sm mx-auto p-3 " />
            <div class="p-4 space-y-2">
              <h2 class="text-xl font-semibold text-pink-700">{{ rec.title }}</h2>
              <p class="text-gray-600 text-sm">{{ rec.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
</template>
  
<script setup>
    import Footer from './Footer.vue'
    import NavBar from './NavBar.vue'

    import { ref, onMounted } from 'vue'
    import { db } from '@/firebase'
    import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

    const recommendations = ref([])
    const loading = ref(true)

    onMounted(() => {
    const q = query(collection(db, 'recommendations'), orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
        recommendations.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        loading.value = false
    })
    })
</script>
  