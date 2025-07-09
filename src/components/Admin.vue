<template>
  <div class="max-w-3xl mx-auto py-10">
    <h2 class="text-2xl font-bold mb-4">Admin Dashboard</h2>
    <button @click="logout" class="mb-6 bg-red-500 text-white px-4 py-2 rounded">Logout</button>

    <form @submit.prevent="createPost" class="mb-10 space-y-4">
      <input v-model="title" placeholder="Post title" class="w-full p-2 border rounded" />
      <textarea v-model="content" placeholder="Post content" class="w-full p-2 border rounded h-40"></textarea>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Publish Post</button>
    </form>

    <div v-if="posts.length > 0" class="space-y-4">
      <h3 class="text-xl font-semibold mb-2">Existing Posts</h3>
      <div v-for="post in posts" :key="post.id" class="border p-4 rounded">
        <h4 class="font-bold">{{ post.title }}</h4>
        <p class="text-sm text-gray-600">{{ post.date }}</p>
        <p class="mt-2">{{ post.content }}</p>
        <button @click="deletePost(post.id)" class="mt-2 bg-red-400 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth, db } from '../firebase'
import { signOut } from 'firebase/auth'
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const content = ref('')
const posts = ref([])

const createPost = async () => {
  if (!title.value.trim() || !content.value.trim()) return
  await addDoc(collection(db, 'posts'), {
    title: title.value,
    content: content.value,
    createdAt: serverTimestamp()
  })
  title.value = ''
  content.value = ''
  fetchPosts()
}

const fetchPosts = async () => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  const querySnapshot = await getDocs(q)
  posts.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().createdAt?.toDate().toLocaleString() || ''
  }))
}

const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id))
  fetchPosts()
}

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}

onMounted(fetchPosts)
</script>
