<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navbar -->
        <NavBar></NavBar>
    
        <!-- Main Content -->
        <main class="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-4">About Me</h1>
        <p class="text-gray-700 mb-6">
            Hi, I'm Madison! Welcome to my blog where I share my thoughts, experiences, and everything in between.
        </p>
        <p class="text-gray-700 mb-6">
            I love connecting with people and sharing stories that inspire and uplift. Join me on this journey!
        </p>
        <p class="text-gray-700 mb-6">
            Feel free to reach out if you have any questions or just want to say hi!
        </p>
        </main>
    
        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
</script>