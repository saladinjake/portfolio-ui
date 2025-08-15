<template>
  <div
    class="card border rounded-lg overflow-hidden bg-white hover:shadow transition"
    :class="view === 'grid' ? 'card-grid' : 'card-list'"
  >
    <!-- Media -->
    <div class="media relative">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
      <button
        class="eye-btn absolute bottom-2 right-2 rounded-full bg-black/70 text-white w-10 h-10 flex items-center justify-center"
        @click.stop="$emit('preview', project)"
        aria-label="Preview project"
        title="Preview"
      >
        <!-- Eye Icon -->
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 5c-6.5 0-10 7-10 7s3.5 7 10 7 10-7 10-7-3.5-7-10-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        </svg>
      </button>
    </div>

    <!-- Body -->
    <div class="p-4 flex flex-col gap-2">
      <h3 class="text-lg font-semibold">{{ project.title }}</h3>
      <p class="text-sm text-gray-600">{{ project.desc }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-for="(t, i) in project.tags"
          :key="i"
          class="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700"
        >{{ t }}</span>
      </div>

      <!-- Footer -->
      <div class="mt-3">
        <a
          class="btn-primary inline-block"
          :href="project.url"
          target="_blank"
          rel="noopener"
        >Live Preview</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  view: { type: String, default: 'grid' } // 'grid' | 'list'
})
</script>

<style scoped>
.card-grid .media { height: 180px; }
.card-list { display: grid; grid-template-columns: 240px 1fr; }
.card-list .media { height: 100%; min-height: 180px; }
.eye-btn { transition: transform .15s ease; }
.eye-btn:hover { transform: scale(1.06); }
.btn-primary {
  background:#2563eb;color:#fff;padding:.5rem .9rem;border-radius:.5rem;font-weight:600
}
</style>
