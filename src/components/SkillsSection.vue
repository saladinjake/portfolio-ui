<template>
  <section class="container mt-16">
    <h2 class="text-3xl font-bold mb-6">My Skills</h2>
    <div class="grid gap-6 max-w-2xl">
      <div v-for="skill in skills" :key="skill.name" class="space-y-2">
        <div class="flex justify-between text-sm font-medium">
          <span>{{ skill.name }}</span>
          <span>{{ skill.level }}%</span>
        </div>
        <div class="w-full h-3 bg-gray-300 rounded">
          <div
            class="h-3 bg-blue-500 rounded transition-all duration-700"
            :style="{ width: `${skill.level}%` }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import skills from '../data/skills.json'
</script>