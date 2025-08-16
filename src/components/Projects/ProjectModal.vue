<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="open" class="overlay" @click.self="$emit('close')">
        <transition name="pop">
          <div class="modal bg-white rounded-xl overflow-hidden max-w-3xl w-[92%]">
            <div class="relative">
              <img :src="project?.image" :alt="project?.title" class="w-full h-64 object-cover" />
              <button class="close-btn" @click="$emit('close')" aria-label="Close">✕</button>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-bold mb-2">{{ project?.title }}</h3>
              <p class="text-gray-700 mb-4">{{ project?.desc }}</p>
              <a v-if="project?.url" :href="project.url" target="_blank" rel="noopener" class="btn-primary">Live Preview</a>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: true },
  project: { type: Object, default: null }
})
console.log(open,"<<<")
</script>

<style scoped>
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:90;display:flex;align-items:center;justify-content:center}
.modal{z-index:99995}
.close-btn{position:absolute;top:.5rem;right:.5rem;width:36px;height:36px;border-radius:9999px;background:rgba(0,0,0,.6);color:#fff}
.fade-enter-active,.fade-leave-active{transition:opacity .18s}
.fade-enter-from,.fade-leave-to{opacity:0}
.pop-enter-active,.pop-leave-active{transition:transform .18s ease,opacity .18s}
.pop-enter-from{transform:scale(.94);opacity:0}
.pop-leave-to{transform:scale(.94);opacity:0}
.btn-primary{background:#2563eb;color:#fff;padding:.6rem 1rem;border-radius:.6rem;font-weight:600}
</style>
