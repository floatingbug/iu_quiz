<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {store} from '../renderlesComponents/store.js';
const router = useRouter();

function singlePlayer(){
    store.isSinglePlayer = true;
    router.push('lobby')
}

</script>

<template>
    <apiCall ref="apiCallRef" />
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <div class="btn-container-1">
            <button v-on:click="singlePlayer">Einzelspieler</button>
            <button v-if="store.loggedInAsAdmin" v-on:click="$router.push('fragenAntwortenEintragen')">
                Fragen & Antworten Eintragen</button>
            <button v-if="store.isLoggedIn" v-on:click="$router.push('fragenEinsenden')">
                Neue Fragen Einsenden
            </button>
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
    font-weight: 700;
    font-size: 1.2rem;
    color: #000000;
    background-color: #00A7B5;
    padding: 10px 30px;
    border: solid #000000 4px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 15px;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
}

button:hover{
  background-color: #0096a3;
}

img {
    min-width: 200px;
    width: 30%;
}

@media(max-width: 975px) {
    .btn-container-1 {
        width: 60%;
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
