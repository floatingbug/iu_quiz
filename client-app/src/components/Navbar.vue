<script setup>
import { store } from '../renderlesComponents/store.js'
</script>

<template>
    <div class="container">
        <nav>
            <div class="link-container">
                <router-link to="/">HOME</router-link>
            </div>
            <div class="link-container">
                <router-link to="/lobby">Lobby</router-link>
            </div>
            <div class="link-container">
                <router-link to="/scoreboard">Scoreboard</router-link>
            </div>
            <div class="link-container" v-if="!store.isLoggedIn">
                <router-link to="/login-user">Login</router-link>
            </div>
            <div class="link-container" v-if="store.isLoggedIn || store.loggedInAsAdmin">
                <router-link to="/logout-user">Logout</router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.container {
    height: 10vh;
}

nav {
    height: 100%;
    background-color: #d9d9d9;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6vw;
    flex-wrap: wrap;
}

.link-container {
    display: flex;
    justify-content: center;
}

.link-container > a {
    text-decoration: none;
    color: black;
    border-color: transparent;
    border-width: 3px;
    border-style: solid;
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    font-size: 1.4rem;
    font-weight: bold;
}

.link-container > a:hover {
    border-color: black;
    background-color: #00a7b5;
}

@media(max-width: 800px) {
    .container {
        height: 20vh;
    }
}
</style>
