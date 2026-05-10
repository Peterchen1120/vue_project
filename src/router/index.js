import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import QuizView from '../views/QuizView.vue'
import Sdg7 from '../views/Sdg7.vue'

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
    },
    {
      path: '/sdg7',
      name: 'sdg7',
      component: Sdg7
    }
  ]
})

export default router
