<template>
  <div class="container">
    <h2 class="text-3xl font-bold mb-4">Resume</h2>
    <h3 class="text-xl font-semibold mt-6">Education</h3>
    <div v-for="edu in resume.education" :key="edu.school" class="mt-2">
      <strong>{{ edu.school }}</strong> – {{ edu.degree }} ({{ edu.year }})
    </div>

    <h3 class="text-xl font-semibold mt-6">Experience</h3>
    <div v-for="exp in resume.experience" :key="exp.company" class="mt-2">
      <strong>{{ exp.company }}</strong> – {{ exp.role }} ({{ exp.duration }})
    </div>
  </div>
</template>

<script setup>
import resume from '../data/resume.json'
</script>
