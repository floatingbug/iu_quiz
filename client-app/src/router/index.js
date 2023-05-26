import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import Login from '../views/Login.vue';
import Lobby from '../views/Lobby.vue';
import Scoreboard from '../views/Scoreboard.vue';
=======
>>>>>>> server

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
<<<<<<< HEAD
      
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

=======
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
>>>>>>> server
  ]
})

export default router
