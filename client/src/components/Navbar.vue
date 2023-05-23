<script setup>
</script>


<template>
    <div class="container">
        <nav>
            <div class="link-container">
                <router-link to="/">HOME</router-link>
            </div>
            <div class="link-container">
                <router-link to="/quiz-start">Quiz starten</router-link>
            </div>
            <div class="link-container">
                <router-link to="/scoreboard">Scoreboard</router-link>
            </div>
            <div class="link-container">
                <router-link to="/find-group">Gruppe finden</router-link>
            </div>
        </nav>
    </div>
</template>


<style scoped>
.container {
    height: 20vh;
    font-size: 1.5rem;
}

nav {
    background-color: lightgrey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2vw;
    margin-top: 5vh;
    height: 5vh;
}

.link-container{
    margin-right: 2vw;
}

.link-container:first-child {
    margin-left:1vw;
}

.link-container:last-child {
    margin-right: 1vw;
}

.link-container>a {
    text-decoration: none;
    color: black;
}

.link-container>a:hover {
    color: red;
}
</style>
