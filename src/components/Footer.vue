<template>
    <footer class="bg-gray-100 py-6 mt-16 border-t">
      <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p class="text-sm text-gray-600 mb-2 md:mb-0">© {{ year }} Madie’s Blog. All rights reserved.</p>
        <div class="flex space-x-4">
          <a
            href="https://www.instagram.com/madisonblithe/"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-pink-500 transition"
          >
          <i class="fa-brands fa-instagram"></i>
          </a>
          
          <a
            href="https://www.tiktok.com/@dailylifewmadieblithe"
            target="_blank"
            rel="noopener"
            class="text-gray-600 hover:text-pink-500 transition"
          >
          <i class="fa-brands fa-tiktok"></i>
          </a>
          <a
            href="mailto:no-reply@madies-blog.com"
            class="text-gray-600 hover:text-pink-500 transition"
          >
          <i class="fa-solid fa-envelope"></i>
          </a>

          <!-- 🪄 Secret Icon: super subtle flower in corner -->
          <router-link
            to="/shhh"
            class="cursor-pointer"
            aria-label="secret"
            title="shhh..."
          >
          <i class="fa-solid fa-user-secret text-gray-100" ></i>
          </router-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const year = new Date().getFullYear()
  </script>
  