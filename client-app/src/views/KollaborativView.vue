<script setup>
import {store} from '../renderlesComponents/store.js';
</script>

<template>
    <div class="container">
        <header>
            <div class="group-id">ID: {{store.lobby.lobbyId}}</div>
            <h3>Kollaborativ Spielmodus</h3>
            <img src="../assets/logo.png" alt="logo">
        </header>
        <main>
            <p> Gruppenname: {{store.lobby.groupName}}</p>
            <div class="player">
                <div class="player-1"></div>
                <div class="player-2"></div>
                <div class="player-3"></div>
                <div class="player-4"></div>
                <button>Quiz Starten</button>
            </div>
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

.player button {
    width: 20px;
    height: 50px;
    margin-top: 50px;
    border: solid #000000 4px;
}

.player button:hover{
  background-color: #0096a3;
}

@media(max-width: 590px){
    header>*{
        flex: 1;
    }
}

@media(max-width: 850px){
    .player>*{
        min-width: 200px;
        height: 150px;
    }
}

@media(max-width: 422px){
    .player>*{
        min-width: 100px;
        height: 100px;
    }
    .player button {
        width: 200px;
        height: 50px;
        margin-top: 50px;
    }
}
</style>
