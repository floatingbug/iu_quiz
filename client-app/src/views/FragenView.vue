<script setup>
import {ref, reactive} from 'vue'
import RichtigeAntwort from '../components/RichtigeAntwort.vue'
import {store} from '../renderlesComponents/store.js';
import ApiCall from '../renderlesComponents/ApiCall.vue';

const apiCallRef = ref(null);
const state = reactive({
    showRightAnswer: false,
});


function evaluateAnswer(e) {
    const request = {
        method: "post",
        url: "/evaluate-answer",
        data: {
            lobbyId: store.lobby.lobbyId,
            questionId: e.target.id,
        }
    };

    const result = apiCallRef.value.call(request, (result)=>{
        console.log(result)
    });

    /* showRightAnswer = true; */
}
</script>


<template>
    <ApiCall ref="apiCallRef" />
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <h2 id="timer">{{ store.lobby.time }} sec</h2>
        <p>{{ question }}</p>
        <div class="antworten">
            <button id="1" v-on:click= "evaluateAnswer">{{ answer1 }}</button>
            <button id="2" v-on:click= "evaluateAnswer">{{ answer2 }}</button>
            <button id="3" v-on:click= "evaluateAnswer">{{ answer3 }}</button>
            <button id="4" v-on:click= "evaluateAnswer">{{ answer4 }}</button>
            <RichtigeAntwort v-if="showRightAnswer"/>
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
</style>



