import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FindGroup from '../views/FindGroup.vue';
import QuizStart from '../views/QuizStart.vue';
import Scoreboard from '../views/Scoreboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      
    {
      path: '/find-group',
      name: 'find-group',
      component: FindGroup
    },

    {
        path: '/quiz-start',
        name: 'quiz-start',
        component: QuizStart
    },

    {
        path: '/scoreboard',
          name: 'scoreboard',
          component: Scoreboard
    },

  ]
})

export default router
