<script setup>
import {ref, reactive, onMounted} from 'vue'
import RichtigeAntwort from '../components/RichtigeAntwort.vue'
import {store} from '../renderlesComponents/store.js';
import ApiCall from '../renderlesComponents/ApiCall.vue';

const apiCallRef = ref(null);
const gameIsOver = ref(false);
const resultAnswer = ref("");
const resultOfGame = ref([]);
const score = ref([]);

function evaluateAnswer(key) {
    //save player answers
    store.lobby.userAnswersArray.forEach(user => {
        console.log(user)
        if(user[0] === store.playerName){
            resultOfGame.value = user[1];
        }
    });

    //save score
    score.value = 0;
    resultOfGame.value.forEach(point => point === true ? score.value++ : null);

    store.isNextRound = false;
    const request = {
        method: "post",
        url: "/evaluate-answer",
        data: {
            lobbyId: store.lobby.lobbyId,
            questionId: key,
            playerName: store.playerName,
        }
    };

    const result = apiCallRef.value.call(request, (result)=>{
        if(result.data.noMoreQuestions){
            gameIsOver.value = true;
            return
        }
        if(result.data.rightAnswer){
            resultAnswer.value = "Antwort war korrekt";
        }
        else{
            resultAnswer.value = "Antwort war falsch";
        }
        if(store.lobby.gameIsOver){
            console.log("---------------------->:", result.data)
            gameIsOver.value = true;
        }
    });
}
</script>


<template>
    <ApiCall ref="apiCallRef" />
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <h2 id="timer" v-if="!gameIsOver">{{ store.lobby.time }} sec</h2>
        <p v-if="!gameIsOver">{{ store.lobby.question }}</p>
        <div class="antworten" v-if="store.isNextRound && !gameIsOver">
            <button v-for="answer in store.lobby.answers" v-bind:key="answer.id" 
                v-bind:disable="!store.lobby.isModerator" v-on:click="evaluateAnswer(answer.id)">
                {{ Object.values(answer)[0] }} 
            </button> 
        </div>
        <div class="show-result" v-if="store.isNextRound && !gameIsOver">{{resultAnswer}}</div>
        <p class="show-answer" v-if="!store.isNextRound && !gameIsOver">{{resultAnswer}}</p>
        <div class="show-final-result" v-if="gameIsOver">score: {{score}} </div>
    </div>
</template>

<style scoped>
.container{
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
.show-result{
    color:black;
    font-size: medium;
    font-weight: 700;
}

h2{
    color: black;
    font-weight: 700;
    size: 60%;
    text-align: center;
}

p{
    font-weight: 100%;
    font-size: 150%;
    color: #000000;
    background-color: #00A7B5;
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


img{
    width: 30%;
    margin-top: 3%;
}

.row{
    display: flex;
    flex-direction: row;
    align-items: center;
}

button:hover{
  background-color: #0096a3;
}


@media(max-width: 850px){
    .row{
    flex-direction: column;
    }
}


</style>



