<template>
    <div class="p-6 max-w-xl mx-auto bg-white rounded-xl shadow space-y-6">
      <div>
        <h2 class="text-2xl font-bold text-pink-600">Add a Recommendation 💡</h2>
  
        <input v-model="title" type="text" placeholder="Title" class="w-full p-2 border rounded" />
        <textarea v-model="description" placeholder="Description" class="w-full p-2 border rounded"></textarea>
  
        <input type="file" @change="handleFileChange" accept="image/*" class="mt-2" />
  
        <button @click="handleUpload" class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Upload
        </button>
  
        <p v-if="error" class="text-red-500">{{ error }}</p>
        <p v-if="success" class="text-green-500">{{ success }}</p>
      </div>
  
      <div>
        <h2 class="text-xl font-bold text-pink-600">Your Recommendations</h2>
        <div v-if="loading" class="text-gray-500">Loading...</div>
        <div v-else class="grid gap-4">
          <div
            v-for="rec in recommendations"
            :key="rec.id"
            class="border p-4 rounded-lg shadow flex items-center justify-between"
          >
            <div>
              <p class="font-semibold">{{ rec.title }}</p>
              <p class="text-sm text-gray-500">{{ rec.description }}</p>
            </div>
            <button @click="deleteRecommendation(rec)" class="text-red-500 hover:underline text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db, storage } from '@/firebase'
  import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    doc,
  } from 'firebase/firestore'
  import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
    deleteObject,
  } from 'firebase/storage'
  
  const title = ref('')
  const description = ref('')
  const file = ref(null)
  const error = ref('')
  const success = ref('')
  const recommendations = ref([])
  const loading = ref(true)
  
  function handleFileChange(e) {
  const selected = e.target.files[0]
  if (selected && !selected.type.startsWith('image/')) {
    error.value = 'Only image files are allowed.'
    return
  }

  const validTypes = ['image/jpeg', 'image/png', 'image/webp']
  if (!validTypes.includes(selected.type)) {
    error.value = 'Please upload JPG or PNG images.'
    return
  }

  file.value = selected
}
  
  async function handleUpload() {
    error.value = ''
    success.value = ''
  
    if (!title.value || !description.value || !file.value) {
      error.value = 'Please fill out all fields and choose a file.'
      return
    }
  
    try {
      const filePath = `recommendations/${Date.now()}-${file.value.name}`
      const fileRef = storageRef(storage, filePath)
      await uploadBytes(fileRef, file.value)
      const imageUrl = await getDownloadURL(fileRef)
  
      await addDoc(collection(db, 'recommendations'), {
        title: title.value,
        description: description.value,
        imageUrl,
        imagePath: filePath,
        createdAt: new Date(),
      })
  
      success.value = 'Recommendation uploaded!'
      title.value = ''
      description.value = ''
      file.value = null
    } catch (err) {
      error.value = err.message
    }
  }
  
  async function deleteRecommendation(rec) {
    try {
      await deleteDoc(doc(db, 'recommendations', rec.id))
      if (rec.imagePath) {
        const imageRef = storageRef(storage, rec.imagePath)
        await deleteObject(imageRef)
      }
    } catch (err) {
      console.error('Delete error:', err)
    }
  }
  
  onMounted(() => {
    const q = query(collection(db, 'recommendations'), orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      recommendations.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      loading.value = false
    })
  })
  </script>
  