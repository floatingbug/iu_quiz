<script setup>
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
            <div class="link-container">
                <router-link to="/login-user">Login</router-link>
            </div>
        </nav>
    </div>
</template>


<style scoped>
.container {
    font-size: 1.5rem;
}

nav {
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    margin-top: 5vh;
    height: 5vh;
    flex-wrap: wrap;
}

.link-container{
    display: flex;
    justify-content: center;
}

.link-container>a {
    text-decoration: none;
    color: black;
}

.link-container>a:hover {
    color: red;
}

@media(max-width: 389px){
    nav{
        height: 10vh;
    }
}
</style>
