


<template>
  <HeroSection />
  <div class="container mt-10">
    <h2 class="text-3xl font-bold mb-6">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </div>
  <ResumeSection class="mt-12" />
</template>



<script setup>
import projects from '../data/projects.json'
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ResumeSection from '../components/ResumeSection.vue'
</script>


















































