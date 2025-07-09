<template>
    <div>
      <h2>Admin Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref(null)

const allowedEmails = ['anagilbert915@gmail.com', 'friends@email.com']

const login = async () => {
  try {
    //console.log('Login attempt', email.value, password.value)
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    //console.log('Logged in:', userCredential.user)

    const userEmail = userCredential.user.email
    if (allowedEmails.includes(userEmail)) {
      router.push('/admin')
    } else {
      error.value = 'Unauthorized email'
    }
  } catch (err) {
    //console.error('Login error:', err.message)
    error.value = err.message
  }
}

</script>

  