import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue';
import Lobby from '../views/Lobby.vue';
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
      path: '/login-user',
      name: 'login-user',
      component: Login
    },

    {
        path: '/lobby',
        name: 'lobby',
        component: Lobby 
    },

    {
        path: '/scoreboard',
          name: 'scoreboard',
          component: Scoreboard
    },

  ]
})

export default router
