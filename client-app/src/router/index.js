import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Lobby from '../views/LobbyView.vue'
import Scoreboard from '../views/ScoreboardView.vue'

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
