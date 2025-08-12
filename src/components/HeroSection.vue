
<template>
  <section class="container">
    <h1 class="text-5xl font-bold">Hi, I'm Victor</h1>
    <p class="mt-4 text-lg">A creative Vue.js developer</p>
    <button class="btn mt-6">See My Work</button>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from('h1', { opacity: 0, y: 50, duration: 1 })
  gsap.from('p', { opacity: 0, y: 50, delay: 0.3 })
})
</script>
