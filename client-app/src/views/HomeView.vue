<script setup>
import {store} from '../renderlesComponents/store.js';

</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <div class="btn-container-1">
            <button v-on:click="console.log(store)">Quiz Starten</button>
            <button v-if="store.loggedInAsAdmin" v-on:click="$router.push('fragenAntwortenEintragen')">
                Fragen & Antworten Eintragen</button>
            <button v-if="store.isLoggedIn" v-on:click="$router.push('fragenEinsenden')">
                Neue Fragen Einsenden</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 0vh;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30%;
    margin-top: 5%;
}

.btn-container-1 {
    min-width: 200px;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

button {
    min-width: 0%;
    width: 100%;
}

img {
    min-width: 200px;
    width: 30%;
}

@media(max-width: 975px) {
    .btn-container-1 {
        width: 80%;
    }
    img {
        width: 50%;
    }
}

@media(max-width: 455px) {
    .container {
        margin-top: 20%;
    }
}
</style>
