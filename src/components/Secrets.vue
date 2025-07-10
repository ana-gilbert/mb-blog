<template>
    <div class="relative w-full h-screen bg-black overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center">
            <h1 class="text-2xl" :style="{
            color: color,
            }">
            HEYYYYYYYY its ana,, i made this shit</h1>
            
        </div>
        <div class="absolute inset-0 flex items-center justify-center mt-5 pt-5">
            <h3 :style="{
            color: color,
            }">
            <a href="https://www.instagram.com/anasofiagilbert/" 
            target="_blank" 
            style="text-decoration: 
            underline;">FOLLOW ME!!</a></h3>
        </div>
      <div
        class="absolute w-24 h-12 bg-pink-500 text-white text-center text-xl font-bold flex items-center justify-center rounded shadow-lg"
        :style="{
          left: x + 'px',
          top: y + 'px',
        }"
      >
        <img src="/src/assets/images/hehe2.png" alt="">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const x = ref(100)
  const y = ref(100)
  const dx = ref(2)
  const dy = ref(2)
  const color = ref(getRandomColor())
  
  let animationFrame
  
  function getRandomColor() {
    const colors = ['#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#a855f7', '#f43f5e', '#8b5cf6', '#f97316', '#059669', '#2563eb']
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  function updatePosition() {
    const elementWidth = 96  // 24 * 4px
    const elementHeight = 48 // 12 * 4px
    const maxX = window.innerWidth - elementWidth
    const maxY = window.innerHeight - elementHeight
  
    x.value += dx.value
    y.value += dy.value

    color.value = getRandomColor()
  
    if (x.value <= 0 || x.value >= maxX) {
      dx.value *= -1
      
    }
    if (y.value <= 0 || y.value >= maxY) {
      dy.value *= -1
      
    }
  
    animationFrame = requestAnimationFrame(updatePosition)
  }
  
  onMounted(() => {
    animationFrame = requestAnimationFrame(updatePosition)
  })
  
  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame)
  })
  </script>
  