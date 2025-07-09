<template>
    <NavBar></NavBar>

    <div class="max-w-xl mx-auto py-10">
      <h1 class="text-3xl font-bold mb-6">Contact Madie</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input v-model="name" type="text" placeholder="Your name" class="w-full p-2 border rounded" />
        <input v-model="email" type="email" placeholder="Your email" class="w-full p-2 border rounded" />
        <textarea v-model="message" placeholder="Your message or story..." class="w-full p-2 border rounded h-40" />
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        <p v-if="success" class="text-green-600">Message sent successfully!</p>
        <p v-if="error" class="text-red-600">{{ error }}</p>
      </form>
    </div>

    <Footer></Footer>
  </template>
  
  <script setup>
  import Footer from './Footer.vue'
  import NavBar from './NavBar.vue'
  import { ref } from 'vue'
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
  import { db } from '../firebase'
  
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const success = ref(false)
  const error = ref(null)
  
  const handleSubmit = async () => {
    try {
      if (!name.value || !email.value || !message.value) {
        error.value = 'Please fill out all fields'
        return
      }
  
      await addDoc(collection(db, 'submissions'), {
        name: name.value,
        email: email.value,
        message: message.value,
        createdAt: serverTimestamp()
      })
  
      success.value = true
      name.value = ''
      email.value = ''
      message.value = ''
      error.value = null
    } catch (err) {
      console.error('Submit error:', err)
      error.value = 'Something went wrong. Please try again later.'
    }
  }
  </script>
  