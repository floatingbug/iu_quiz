<script setup>

import { ref } from 'vue';
import RichtigeAntwort from '../components/RichtigeAntwort.vue'

const showTimer = ref(true);
const countdown = ref(30);

function startTimer() {
    const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
            clearInterval(timer);
            showTimer.value = false;
        }
    }, 1000);
}

  startTimer();
</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
        <div id="timer">
            <div v-if="showTimer">
                <h2>{{ countdown }} sec</h2>
                <div class="frage">
                    <p>Frage</p>
                </div>
                <div class="antworten">
                    <button id="Antwort 1">Antwort 1</button>
                    <button id="Antwort 2">Antwort 2</button>
                    <button id="Antwort 3">Antwort 3</button>
                    <button id="Antwort 3">Antwort 4</button>
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