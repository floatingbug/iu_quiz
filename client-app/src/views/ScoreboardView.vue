<script setup>
import { ref } from 'vue'
import ScoreboardEinzel from '../components/ScoreboardEinzel.vue'
import ScoreboardKoop from '../components/ScoreboardKoop.vue'
import ScoreboardKolla from '../components/ScoreboardKolla.vue'

const showEinzel = ref(true)
const showKoop = ref(true)
const showKolla = ref(true)

function showEinzelTable() {
    showEinzel.value = true
    showKoop.value = false
    showKolla.value = false
}

function showKoopTable() {
    showEinzel.value = false
    showKoop.value = true
    showKolla.value = false
}

function showKollaTable() {
    showEinzel.value = false
    showKoop.value = false
    showKolla.value = true
}
</script>

<template>
    <div class="container">
        <button v-on:click="showEinzelTable">Einzel</button>
        <button v-on:click="showKoopTable">Kooperativ</button>
        <button v-on:click="showKollaTable">Kollaborativ</button>        
    </div>

    <div class="container1">
        <ScoreboardEinzel v-if="showEinzel"/>
        <ScoreboardKoop v-if="showKoop"/>
        <ScoreboardKolla v-if="showKolla"/>
    </div>
</template>

<style scoped>
.container{
    position: relative;
    top: -1.5vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5%;
}    
button{
    min-width: 30px;
    width: 100%;
    margin: 0.5%;
}

.container1{
    margin-top: -3%;
    padding-bottom: 10%;
}

@media (min-width: 300px) { 
  .container button {
    width: 50%;
  }
  .container1{
    padding-bottom: 20%;
  }
}

@media (min-width: 900px) { 
  .container button {
    width: 16%; 
  }
  .container1{
    padding-bottom: 10%;
  }
}
</style>

