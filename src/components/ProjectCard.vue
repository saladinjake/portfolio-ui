<template>
  <div class="card cursor-pointer" @click="$router.push(`/project/${project.id}`)">
    <img :src="project.thumbnail" class="rounded mb-4 w-full" />
    <h2 class="text-xl font-bold">{{ project.title }}</h2>
    <p class="mt-2 text-sm">{{ project.description }}</p>
  </div>
</template>

<script setup>
defineProps(['project'])
</script>

