<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../renderlesComponents/store.js'
import { handleGame } from '../renderlesComponents/handleGame.js'
import apiCall from '../renderlesComponents/ApiCall.vue'
const router = useRouter()
const apiCallRef = ref(null)

handleGame.startFetchGamedata()

function startQuiz() {
    const quizId = store.lobby.lobbyId
    const request = {
        url: '/start-quiz',
        method: 'post',
        data: { quizId }
    }

    const result = apiCallRef.value.call(request, (result) => {
        if (result.code === 1) {
            console.log(result.msg)
            return
        }
    })

    router.push('fragen')
}

watch(
    () => store.lobby.isRunning,
    (newValue, oldValue) => {
        if (newValue) {
            router.push('fragen')
        }
    }
)
</script>

<template>
    <apiCall ref="apiCallRef" />
    <div class="container">
        <header>
            <div class="group-id">ID: {{ store.lobby.lobbyId }}</div>
            <h3 v-if="!store.isSinglePlayer">Kollaborativer Spielmodus</h3>
            <h3 v-if="store.isSinglePlayer">Einzelspieler Modus</h3>
            <img src="../assets/logo.png" alt="logo" />
        </header>
        <main>
            <p v-if="!store.isSinglePlayer">Gruppenname: {{ store.lobby.groupName }}</p>
            <div class="player" v-if="!store.quizIsCanceled && !store.isSinglePlayer">
                <div class="player-1">{{ store.lobby.players[0] }}</div>
                <div class="player-2">{{ store.lobby.players[1] }}</div>
                <div class="player-3">{{ store.lobby.players[2] }}</div>
                <div class="player-4">{{ store.lobby.players[3] }}</div>
            </div>
            <button v-if="store.isModerator" v-on:click="startQuiz">Quiz Starten</button>
        </main>
    </div>
</template>

<style scoped>
.container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container h3 {
    font-weight: 700;
}
.group-id {
    font-weight: 700;
}

header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    color: black;
}

header > * {
    width: 30%;
}

img {
    width: 20%;
}

main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    color: black;
}

.player {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5%;
    margin-top: 50px;
}

.player > * {
    font-size: 1.6rem;
    text-align: center;
    color: black;
    height: 50%;
    min-width: 400px;
    max-width: 600px;
    width: 40%;
    border: 2px solid black;
    border-radius: 20px;
}

.player > *:first-child {
    background-color: blue;
}

.player > *:nth-child(2) {
    background-color: red;
}

.player > *:nth-child(3) {
    background-color: yellow;
}

.player > *:nth-child(4) {
    background-color: green;
}

main button {
    width: 20px;
    height: 50px;
    margin-top: 50px;
    border: solid #000000 4px;
}

main button:hover {
    background-color: #0096a3;
}

@media (max-width: 590px) {
    header > * {
        flex: 1;
    }
}

@media (max-width: 850px) {
    .player > * {
        min-width: 200px;
        height: 150px;
    }
}

@media (max-width: 422px) {
    .player > * {
        min-width: 100px;
        height: 100px;
    }
    main button {
        width: 200px;
        height: 50px;
        margin-top: 50px;
    }
}
</style>
