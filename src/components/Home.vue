<template>
  <div class="min-h-screen">
    <NavBar />


    <!-- Hero Section -->
<section class="bg-white rounded-3xl shadow-md max-w-6xl mx-auto mt-6 px-2 py-3">
  <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-0">
    
    <!-- Clock Logo (1/4 width) -->
    <div class="w-full md:w-2/5 flex justify-center md:justify-start">
      <img
        src="/src/assets/images/MMlogo.png"
        alt="The Madison Minute Clock"
        class="h-84 sm:h-96"
      />
    </div>

    <!-- Tagline + Button (3/4 width) -->
    <div class="w-full md:w-3/5 text-center flex flex-col justify-center h-full">
      <h1 class="">
        Girlhood, growing up, and everything<br />
        in between – minute by minute.
      </h1>
      <div class="mt-6">
        <router-link
          :to="`/post/${featuredPosts[0]?.id}`"
          style="background-color: #fbbac7;"
          class="px-6 py-3 rounded-full shadow-md hover:bg-pink-400 transition text-white text-lg font-semibold w-fit inline-block"
        >
          <h2>READ MY LATEST POST HERE!</h2>
        </router-link>
      </div>
    </div>

  </div>
</section>


    <!-- Recent Posts Grid -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div
          v-for="post in featuredPosts"
          :key="post.id"
          style="background-color: #ffdce3;"
          class="p-12 rounded-3xl shadow hover:shadow-lg transition">
          
          <h3 class="mb-4 leading-snug">{{ post.title }}</h3>
          <router-link
            :to="`/post/${post.id}`"
            style="background-color: #fbbac7; font-family: 'Perandory Condensed'; font-size: 1.5rem; letter-spacing: 2px; font-weight: 100;"
            class="text-white inline-block mt-8 mb-2 px-8 py-2 rounded-full font-semibold hover:bg-pink-400 transition"
          >
            CLICK TO READ
          </router-link>
        </div>
      </div>
    </section>

    <!-- Image Collage -->
    <section class="flex justify-center px-4 pb-20">
      <div class="relative">
        <!-- Base Image -->
        <img
          src="/src/assets/images/beach.png"
          alt="Beach collage"
          class="w-[300px] sm:w-[400px] rounded-md shadow-lg"
        />
        
      </div>
    </section>

    <Footer />
  </div>
</template>

  

<script setup>
  import Footer from './Footer.vue'
  import NavBar from './NavBar.vue'
  import { ref, onMounted } from 'vue'
  import { db } from '../firebase'
  import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'

  const featuredPosts = ref([])

  const fetchLatestPosts = async () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(3))
    const snapshot = await getDocs(q)

    featuredPosts.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().createdAt?.toDate().toLocaleDateString() || ''
    }))
  }

  onMounted(fetchLatestPosts)
</script>

  
  <style scoped>
    body {
      margin: 0;
    }

    h1 {
      font-family:'Times New Roman', Times, serif;
      font-weight: 100;
      transform: scaleY(1.2);
      color: #6d6566; /* Gray-700 */
      font-size: 2.75rem;
    }
    h3{
      font-family:'Times New Roman', Times, serif;
      font-weight: 100;
      transform: scaleY(1.2);
      color: #6d6566; /* Gray-700 */
      font-size: 2.75rem;
    }
    h2 {
      font-family:'Perandory Condensed', Times, serif;
      font-weight: 50;
      font-size: 1.75rem;
      letter-spacing: 1px;
      color: #ffffff; 
    }
    router-link {
      background-color: #fbbac7;
      color: white;
      font-family: 'Perandory Condensed', sans-serif;
    }

  </style>
  