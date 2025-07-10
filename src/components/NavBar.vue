<template>
    <!-- Navbar -->
  <header class="bg-gray-100 shadow">
    <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">The Madison Minute</h1>
      <nav>
        <ul class="flex gap-4 text-sm">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about-me">About Me</router-link></li>
          <li><router-link to="/archive">Archive</router-link></li>
          <li><a href="#" class="hover:text-blue-600">Gallery</a></li>
          <li><router-link to="/contact-me">Contact Me</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
h1{
  font-family: 'Amoresa';
  color: #4A5568; /* Gray-700 */
}
li{
  font-family: 'Times Condensed';
}
</style>