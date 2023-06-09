<script setup>
import { ref } from 'vue'
import RichtigeAntwort from '../components/RichtigeAntwort.vue'
import {store} from '../renderlesComponents/store.js';

const showRichtigeAntwort = ref(false);
const showTimer = ref(true);
const countdown = ref(5);
const question = store.quiz.question;
const answer1 = store.quiz.answer1;
const answer2 = store.quiz.answer2;
const answer3 = store.quiz.answer3;
const answer4 = store.quiz.answer4;

function handleButtonClick() {
  showRichtigeAntwort.value = true;
}

</script>


<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/logo.png" alt="LOGO" />
        </div>
        <div id="timer">
            <div v-if="showTimer">
                <h2>{{ store.lobby.counter }} sec</h2>
                <div class="frage">
                    <p>{{ question }}</p>
                </div>
                <div class="antworten">
                    <button id="Antwort 1" v-on:click= "handleButtonClick">{{ answer1 }}</button>
                    <button id="Antwort 2" v-on:click= "handleButtonClick">{{ answer2 }}</button>
                    <button id="Antwort 3" v-on:click= "handleButtonClick">{{ answer3 }}</button>
                    <button id="Antwort 3" v-on:click= "handleButtonClick">{{ answer4 }}</button>
                </div>
            </div>
            <div v-else>
                <RichtigeAntwort/>
            </div>
        </div>   
    </div>
</template>

<style scoped>
.container{
    min-height: 20vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2{
    color: black;
    font-weight: 700;
    font-size: 1.5vw;
    text-align: center;
}

p{
    width: 40vw;
    height: 7vw;
    border: 4px solid black;
    border-radius: 25px;
    background-color:#00a7b5;
    text-align: center;
    color: black;
    font-weight: 700;
    font-size: 1.4vw;
    margin-top: 1vw;
    justify-content: center;
}

.antworten{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 40vw;
    height: 16vw;
    grid-gap: 0.5vw;
    margin-top: 0.5vw;
    justify-content: center;
}

.logo {
    min-width: 50%;
    max-width: 10%;
    width: 100%;
    margin-top: 8vw;
    display: flex;
    justify-content: center;
}

.logo img {
    width: 100%;
    object-fit: contain;
}


button{
    height: 7vw;
}

@media (max-width: 1035px) {
    .antworten {
        grid-template-columns: 1fr;
    }

    h2 {
        font-size: 5vw;
    }

    p {
        width: 90%;
        font-size: 4vw;
        justify-content: center;
    }

    .logo {
        align-content: center;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    
    button{
        height: auto;
        width: 90%;
        padding: 2vw;
    }
}
</style>



