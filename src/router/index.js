import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    }
  ]
})

export default router
