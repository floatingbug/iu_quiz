<script setup>
import { ref, watch } from 'vue'
import RichtigeAntwort from '../components/RichtigeAntwort.vue'
import {store} from '../renderlesComponents/store.js';

const showRichtigeAntwort = ref(false);
const showTimer = ref(true);
const question = store.quiz.question;
const answer1 = store.quiz.answer1;
const answer2 = store.quiz.answer2;
const answer3 = store.quiz.answer3;
const answer4 = store.quiz.answer4;
//const counter = lobbyStore.lobbies.get(lobbyId)?.counter;

function handleButtonClick() {
    console.log(showRichtigeAntwort.value);
  showRichtigeAntwort.value = true;
  showTimer.value = false;
}

//watch (counter, (newValue) => {
  //  if (newValue <= 0) {
    //    showTimer.value = false;
      //  showRichtigeAntwort.value = true;
   // }
//});

</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
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
            <div v-if="showRichtigeAntwort">
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
    margin-top: -8vw;
}

h2{
    color: black;
    font-weight: 700;
    font-size: 1,5vw;
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
    margin-top: 1vw;;
}

.antworten{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 40vw;
    height: 16vw;
    grid-gap: 0.5vw;
    margin-top: 0.5vw;
}
img {
    min-width: 180px;
    max-width: 20vw;
   margin-left: 75%;
   margin-top: 5%;
}

button{
    height: 7vw;
}
</style>
