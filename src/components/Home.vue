<template>
    <div class="min-h-screen bg-white text-gray-800 font-sans">
      <!-- Navbar -->
      <header class="bg-gray-100 shadow">
        <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">Madie's Blog</h1>
          <nav>
            <ul class="flex gap-4 text-sm">
              <li><a href="#" class="hover:text-blue-600">Home</a></li>
              <li><a href="#" class="hover:text-blue-600">Posts</a></li>
              <li><a href="#" class="hover:text-blue-600">Gallery</a></li>
              <li><a href="#" class="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <!-- Hero section -->
      <section class="bg-blue-50 py-12 text-center">
        <h2 class="text-4xl font-semibold mb-2">Welcome to Madie's Blog</h2>
        <p class="text-gray-600 text-lg">A space for stories, inspiration, and connection.</p>
      </section>
  
      <!-- Recent Posts -->
      <main class="max-w-3xl mx-auto px-4 py-8">
        <h3 class="text-2xl font-semibold mb-6">Latest Posts</h3>
        <div class="space-y-6">
          <div v-for="post in posts" :key="post.id" class="border-b pb-4">
            <h4 class="text-xl font-medium text-blue-700">{{ post.title }}</h4>
            <p class="text-sm text-gray-500">{{ post.date }}</p>
            <p class="mt-2 text-gray-700">{{ post.excerpt }}</p>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-100 text-center py-4 mt-12 text-sm text-gray-500">
        © 2025 Madie's Blog. All rights reserved.
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const posts = ref([
    {
      id: 1,
      title: 'How I Found My Voice Through Writing',
      date: 'July 7, 2025',
      excerpt: 'Writing has been my creative outlet for years. Here’s how it helped me grow…'
    },
    {
      id: 2,
      title: 'Top 5 Beach Reads for Summer',
      date: 'June 30, 2025',
      excerpt: 'Whether you’re on a plane or poolside, these books are perfect companions…'
    },
    {
      id: 3,
      title: 'Photos from My Weekend Getaway',
      date: 'June 22, 2025',
      excerpt: 'I escaped to the coast and captured some beautiful moments. Check them out…'
    }
  ])
  </script>
  
  <style>
  body {
    margin: 0;
  }
  </style>
  