<script setup>
import {useRouter} from 'vue-router';
import {store} from '../renderlesComponents/store.js';
import {handleGame} from '../renderlesComponents/handleGame.js';
const router = useRouter();

handleGame.startFetchGamedata()

function startQuiz(){
	router.push('Fragen')
}
</script>

<template>
    <div class="container">
        <header>
            <div class="group-id">ID: {{store.lobby.lobbyId}}</div>
            <h3>Kooperativer Spielmodus</h3>
            <img src="../assets/logo.png" alt="logo">
        </header>
        <main>
            <p> Gruppenname: {{store.lobby.groupName}}</p>
            <div class="player">
                <div class="player-1">{{store.lobby.players[0]}}</div>
                <div class="player-2">{{store.lobby.players[1]}}</div>
                <div class="player-3">{{store.lobby.players[2]}}</div>
                <div class="player-4">{{store.lobby.players[3]}}</div>
            </div>
            <button v-on:click="startQuiz">Quiz Starten</button>
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

header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
}

header>* {
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

.player>* {
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

.player>*:first-child {
    background-color: blue;
}

.player>*:nth-child(2) {
    background-color: red;
}

.player>*:nth-child(3) {
    background-color: yellow;
}

.player>*:nth-child(4) {
    background-color: green;
}

main button {
    width: 20px;
    height: 50px;
    margin-top: 50px;
}

@media(max-width: 590px){
    header>*{
        flex: 1;
    }
}
@media(max-width: 415px){
    .player>*{
        min-width: 200px;
        height: 200px;
    }
}
</style>
