<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();
</script>

<template>
<div class="container">
    <div class="frage">
        <p>Richtige Antwort</p>
    </div>
    <button v-on:click="$router.push('fragen')">Nächste Frage</button>
</div>
</template>

<style scoped>
.container{
    height: 50vw;
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
    margin-top: 11vw;
}
button{
  bottom: 0;
   width: 20vw;
   height: 5vw;
}
</style>