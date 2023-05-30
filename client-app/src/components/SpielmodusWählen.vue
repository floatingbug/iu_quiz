<script setup></script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <div class="container-btn-1">
            <button id="Kooperatives-Spiel">Kooperatives Spiel</button>
            <button id="Kollaboratives-Spiel">Kollaboratives Spiel</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    height: 50vh;
}

img {
    position: absolute;
    min-width: 180px;
    max-width: 20vw;
    top: 0px;
    right: 3%;
}

.container-btn-1 {
    position: absolute;
    bottom: 10vh;
    left: 5vw;
    width: 20vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

Button {
    text-transform: uppercase;
    border: 3px solid black;
    transition: border 0.1s ease;
    margin: 0.5vh;
}

button:hover {
    border: 4px solid black;
}</style>