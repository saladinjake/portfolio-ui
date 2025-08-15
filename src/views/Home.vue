


<template>
<Header/>
  <HeroSection />
  <SkillsSection />
  <div class="container mt-10">
    <h2 class="text-3xl font-bold mb-6">Recent Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </div>



  <section class="container mt-20">
    <h2 class="text-3xl font-bold mb-8">Projects</h2>

    <!-- Filter buttons -->
    <div class="flex flex-wrap gap-3 mb-6">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="activeTag = tag"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition',
          activeTag === tag
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white'
        ]"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Project grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="p in filteredProjects"
        :key="p.id"
        class="card cursor-pointer"
        @click="$router.push(`/project/${p.id}`)"
      >
        <img :src="p.thumbnail" class="rounded mb-4 w-full h-48 object-cover" />
        <h3 class="font-bold text-lg">{{ p.title }}</h3>
        <p class="text-sm mt-2 text-gray-500">{{ p.description }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tech in p.tech"
            :key="tech"
            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
  
  <TestimonialSection/>

  <ResumeSection class="mt-12" />
</template>



<script setup>
import Header from "../components/Header/index.vue"
import projects from '../data/projects.json'
import HeroSection from '../components/Hero/index.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ResumeSection from '../components/ResumeSection.vue'
import TestimonialSection from "../components/TestimonialSection.vue"

import SkillsSection from '../components/SkillsSection.vue'
import { ref, computed } from 'vue'

const activeTag = ref('All')

// Create tag list dynamically
const allTags = computed(() => {
  const tags = new Set(['All'])
  projects.forEach(p => p.tech.forEach(t => tags.add(t)))
  return Array.from(tags)
})

const filteredProjects = computed(() => {
  if (activeTag.value === 'All') return projects
  return projects.filter(p => p.tech.includes(activeTag.value))
})

</script>


















































