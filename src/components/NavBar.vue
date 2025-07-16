<template>
  <header class="p-6 flex justify-center">
    <div
      class="w-full max-w-6xl bg-white shadow-md rounded-full px-8 py-7 flex items-center justify-between relative border border-rose-200"
      style="min-height: 7.5rem;"
    >
      <!-- Left Navigation -->
      <ul class="flex gap-15 text-lg text-gray-800 font-semibold items-center px-3">
        <li><router-link to="/about-me" class="hover:text-pink-600 transition">ABOUT</router-link></li>
        <li><router-link to="/archive" class="hover:text-pink-600 transition">ARCHIVE</router-link></li>
      </ul>

      <!-- Center Logo -->
      <router-link to="/"><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/src/assets/images/MMlogo2.png"
          alt="The Madison Minute"
          class="h-26 sm:h-28 object-contain"
        />
      </div></router-link>

      <!-- Right Navigation -->
      <ul class="flex gap-15 text-lg text-gray-800 font-semibold items-center px-3">
        <li><router-link to="/recs" class="hover:text-pink-600 transition">RECS</router-link></li>
        <li><router-link to="/contact-me" class="hover:text-pink-600 transition">CONTACT</router-link></li>
      </ul>
    </div>
  </header>
</template>





<style scoped>
  h1{
    font-family: 'Amoresa';
    color: #4A5568; /* Gray-700 */
  }
  li{
    font-family: 'Perandory Condensed';
    color: #6d6566;
    font-weight:100;
    letter-spacing: 1.5px;
    font-size: 35px;
  }
  header{
    background-color: #ffeff3; 
  }
</style>