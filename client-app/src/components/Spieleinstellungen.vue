<script setup>
import {reactive} from 'vue';
import {store} from '../renderlesComponents/store.js';

const settings = reactive({
    theme: "",
    numberQuestions: Number,
    time: Number,
});

//todo: check if all settings are choosen.

</script>


<template>
    <div class="container">
        <label for="Thema">Themenbereich:</label>
        <select id="Thema" v-model="settings.theme">
            <option value="Thema1">Thema 1</option>
            <option value="Thema2">Thema 2</option>
            <option value="Thema3">Thema 3</option>
        </select>

        <label for="AnzFragen">Anzahl Fragen:</label>
        <select id="AnzFragen" v-model="settings.numberQuestions">
            <option value="10">10 Fragen</option>
            <option value="15">15 Fragen</option>
            <option value="20">20 Fragen</option>
        </select>

        <label for="ZeitProFrage">Zeit pro Frage:</label>
        <select id="ZeitProFrage" v-model="settings.time">
            <option value="30">30 Sekunden</option>
            <option value="45">45 Sekunden </option>
            <option value="60">60 Sekunden</option>
        </select>
        
        <button v-on:click="$emit('save-settings', {data: settings})">Einstellungen Übernehmen</button>
    </div>
</template>


<style scoped>

.container{
    min-height: 20vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2vw;
}

label{
    color: black;
    width: 30%;
    align-items: left;
    font-weight: 700;
    font-size: 1vw;
    margin-top: 1%;
}

select{
    width: 30%;
    height: 10%;
    align-items: center;
    font-size: 1vw;
}

img {
    min-width: 180px;
    max-width: 20vw;
   margin-left: 75%;
   margin-top: 5%;
}

button{
    width: 15%;
    margin-top: 2%;
}
</style>
