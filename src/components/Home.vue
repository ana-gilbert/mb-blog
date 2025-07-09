<template>
    <div class="min-h-screen bg-white text-gray-800 font-sans">
      
  
      <!-- Hero section -->
      <section class="bg-blue-50 py-12 text-center">
        <h2 class="text-4xl font-semibold mb-2">Welcome to Madie's Blog</h2>
        <p class="text-gray-600 text-lg">A space for stories, inspiration, and connection.</p>
      </section>
  
      <!-- Recent Posts -->
      <div class="max-w-3xl mx-auto py-10">
        <h1 class="text-3xl font-bold mb-6">Latest Post</h1>
        <div v-if="latestPost" class="border p-4 rounded shadow">
          <h2 class="text-xl font-semibold">{{ latestPost.title }}</h2>
          <p class="text-sm text-gray-500">{{ latestPost.date }}</p>
          <p class="mt-2">{{ latestPost.content }}</p>
        </div>
        <div v-else>
          <p>No posts yet!</p>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-100 text-center py-4 mt-12 text-sm text-gray-500">
        © 2025 Madie's Blog. All rights reserved.
      </footer>
    </div>
  </template>
  

  <script setup>
    import { ref, onMounted } from 'vue'
    import { db } from '../firebase'
    import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
    
    const latestPost = ref(null)
    
    const fetchLatestPost = async () => {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(1))
      const snapshot = await getDocs(q)
      const doc = snapshot.docs[0]
    
      if (doc) {
        latestPost.value = {
          id: doc.id,
          ...doc.data(),
          date: doc.data().createdAt?.toDate().toLocaleString() || ''
        }
      }
    }
    
    onMounted(fetchLatestPost)
  </script>
  
  <style>
  body {
    margin: 0;
  }
  </style>
  