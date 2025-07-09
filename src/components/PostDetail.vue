<template>
    <NavBar></NavBar>
    <div class="max-w-3xl mx-auto py-10">
      <router-link to="/archive" class="text-blue-500 underline mb-4 block">← Back to archive</router-link>
      <div v-if="post">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <p class="text-sm text-gray-500">{{ post.date }}</p>
        <div class="mt-4 whitespace-pre-line">
          {{ post.content }}
        </div>
      </div>
      <div v-else>
        <p>Loading post...</p>
      </div>
    </div>

    <Footer></Footer>
  </template>
  
  <script setup>
  import Footer from './Footer.vue'
  import NavBar from './NavBar.vue'
  import { ref, onMounted } from 'vue'
  import { db } from '../firebase'
  import { doc, getDoc } from 'firebase/firestore'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const post = ref(null)
  
  const fetchPost = async () => {
    const postRef = doc(db, 'posts', route.params.id)
    const docSnap = await getDoc(postRef)
    if (docSnap.exists()) {
      post.value = {
        id: docSnap.id,
        ...docSnap.data(),
        date: docSnap.data().createdAt?.toDate().toLocaleString() || ''
      }
    }
  }
  
  onMounted(fetchPost)
  </script>
  