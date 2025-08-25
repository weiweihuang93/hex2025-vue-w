import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/week1',
      name: 'week1',
      component: () => import('../views/Week1.vue'),
    },
    {
      path: '/week2',
      name: 'week2',
      component: () => import('../views/Week2.vue'),
    },
    {
      path: '/week3',
      name: 'week3',
      component: () => import('../views/Week3.vue'),
    },
  ],
})

export default router
