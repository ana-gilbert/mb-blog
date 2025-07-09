<script setup>
import Home from './components/Home.vue'
</script>

<template>

<!-- Navbar -->
  <header class="bg-gray-100 shadow">
    <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Madie's Blog</h1>
      <nav>
        <ul class="flex gap-4 text-sm">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/archive">Archive</router-link></li>
          <li><a href="#" class="hover:text-blue-600">Gallery</a></li>
          <li><a href="#" class="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <router-view />

</template>
