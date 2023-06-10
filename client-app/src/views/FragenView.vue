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
            <div v-if="showRichtigeAntwort">
                <RichtigeAntwort/>
            </div>
        </div>   
    </div>
</template>

<style scoped>
.container{
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20%;
}

h2{
    color: black;
    font-weight: 700;
    font-size: 1.5vw;
    text-align: center;
}

p{
    font-weight: 700;
    font-size: 1.2rem;
    color: #000000;
    background-color: #00A7B5;
    padding: 10px 30px;
    border: solid #000000 4px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transform: translateY(0);
    text-align: center;
    color: black;
    font-weight: 700;
    font-size: 1.4vw;
    margin-top: 2%;
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
        width: 100%;
        font-size: 4vw;
        height: auto;
    }


    .logo {
        align-content: center;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    
    button{
        height: auto;
        width: 100%;
        padding: 2vw;
    }



}
</style>



