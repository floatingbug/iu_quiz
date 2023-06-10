import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Lobby from '../views/LobbyView.vue'
import Scoreboard from '../views/ScoreboardView.vue'
import Impressum from '../views/ImpressumView.vue'
import Hilfe from '../views/HilfeView.vue'
import Fragen from '../views/FragenView.vue'
import Gruppenansicht from '../views/GruppenansichtView.vue'
import FragenEinsenden from '../views/FragenEinsendenView.vue'
import FragenAntwortenEintragen from '../views/FragenAntwortenEintragenView.vue'
import Feedback from '../views/FeedbackView.vue'
import Kooperativ from '../views/KooperativView.vue';
import Kollaborativ from '../views/KollaborativView.vue';

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

        {
            path: '/impressum',
            name: 'impressum',
            component: Impressum
        },

        {
            path: '/hilfe',
            name: 'hilfe',
            component: Hilfe
        },

        {
            path: '/fragen',
            name: 'fragen',
            component: Fragen
        },

        {
            path: '/gruppenansicht',
            name: 'gruppenansicht',
            component: Gruppenansicht
        },

        {
            path: '/fragenEinsenden',
            name: 'fragenEinsenden',
            component: FragenEinsenden
        },

        {
            path: '/fragenAntwortenEintragen',
            name: 'fragenAntwortenEintragen',
            component: FragenAntwortenEintragen
        },

        {
            path: '/feedback',
            name: 'feedback',
            component: Feedback
        },

        {
            path: '/kooperativ',
            name: 'kooperativ',
            component: Kooperativ
        },

        {
            path: '/kollaborativ',
            name: 'kollaborativ',
            component: Kollaborativ
        },
    ]
})

export default router
