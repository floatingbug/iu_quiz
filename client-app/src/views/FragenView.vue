<script setup>
import { ref, reactive, onMounted } from 'vue'
import RichtigeAntwort from '../components/RichtigeAntwort.vue'
import { store } from '../renderlesComponents/store.js'
import ApiCall from '../renderlesComponents/ApiCall.vue'

const apiCallRef = ref(null)
const resultAnswer = ref('')

function evaluateAnswer(key) {
    store.isNextRound = false
    const request = {
        method: 'post',
        url: '/evaluate-answer',
        data: {
            lobbyId: store.lobby.lobbyId,
            questionId: key,
            playerName: store.playerName
        }
    }

    const result = apiCallRef.value.call(request, (result) => {
        if(!result || !result.data){
            return
        }

        if (result.data.rightAnswer) {
            resultAnswer.value = 'Antwort war korrekt'
        } else {
            resultAnswer.value = 'Antwort war falsch'
        }
    })
}
</script>

<template>
    <ApiCall ref="apiCallRef" />
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <h2 id="timer" v-if="!store.gameIsOver">{{ store.lobby.time }} sec</h2>
        <p v-if="!store.gameIsOver">{{ store.lobby.question }}</p>
        <div class="antworten" v-if="store.isNextRound && !store.gameIsOver">
            
            <button
                v-for="answer in store.lobby.answers"
                v-bind:key="answer.id"
                v-bind:disabled="!store.isModerator && store.lobby.gameMode === 'koop'"
                v-on:click="evaluateAnswer(answer.id)"
            >
                {{ Object.values(answer)[0] }}
            </button>
        </div>
        <div class="show-result" v-if="store.isNextRound && !store.gameIsOver">{{ resultAnswer }}</div>
        <p class="show-answer" v-if="!store.isNextRound && !store.gameIsOver">{{ resultAnswer }}</p>
        <div class="show-final-result" v-if="store.gameIsOver">score: {{ store.score }}</div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20%;
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}
.show-result {
    color: black;
    font-size: medium;
    font-weight: 700;
}

h2 {
    color: black;
    font-weight: 700;
    size: 60%;
    text-align: center;
}

p {
    font-weight: 100%;
    font-size: 150%;
    color: #000000;
    background-color: #00a7b5;
    padding: 10px 30px;
    border: solid #000000 4px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transform: translateY(0);
    text-align: center;
    color: black;
    margin-top: 2%;
    font-weight: 700;
    width: 80%;
    height: auto;
    justify-content: center;
    max-width: 500px;
    overflow-wrap: break-word;
}

.antworten {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 3%;
    width: 80%;
    height: auto;
    align-items: center;
}

.show-final-result {
    color: #000000;
}

img{
    width: 30%;
    margin-top: 3%;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
}

button:hover {
    background-color: #0096a3;
}

@media (max-width: 850px) {
    .row {
        flex-direction: column;
    }
}
</style>
