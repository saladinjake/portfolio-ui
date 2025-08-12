// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: ProjectDetail },

{
  path: '/contact',
  component: () => import('../views/Contact.vue')
}

  
]

export default createRouter({
  history: createWebHistory(),
  routes
})







