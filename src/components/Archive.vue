<template>
    <div class="max-w-3xl mx-auto py-10">
      <h1 class="text-3xl font-bold mb-6">Past Posts</h1>
      <div v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="border p-4 rounded mb-4">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="text-sm text-gray-500">{{ post.date }}</p>
          <p class="mt-2">{{ post.content }}</p>
        </div>
      </div>
      <div v-else>
        <p>No older posts yet.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db } from '../firebase'
  import { collection, query, orderBy, getDocs } from 'firebase/firestore'
  
  const posts = ref([])
  
  const fetchPosts = async () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    const docs = snapshot.docs
  
    // Skip the first (most recent) post
    posts.value = docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().createdAt?.toDate().toLocaleString() || ''
    }))
  }
  
  onMounted(fetchPosts)
  </script>
  