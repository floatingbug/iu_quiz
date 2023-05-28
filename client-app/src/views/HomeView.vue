<script setup>
import {store} from '../renderlesComponents/store.js';
</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <div class="btn-container-1">
            <button>Quiz Starten</button>
            <button v-if="loggedInAsAdmin">Fragen & Antworten Eintragen</button>
        </div>
        <div class="admin">
            
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    height: 50vh;
}

.btn-container-1 {
    position: absolute;
    min-width: 200px;
    width: 25%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 13vh;
}

button {
    width: 100%;
    text-transform: uppercase;
    height: 60px;
}

img {
    position: absolute;
    min-width: 200px;
    max-width: 80vw;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid black;
    border-radius: 30px;
}
</style>
