<script setup>
import {store} from '../renderlesComponents/store.js';

</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <div class="btn-container-1">
            <button v-on:click="console.log(store)">Quiz Starten</button>
            <button v-if="store.loggedInAsAdmin" v-on:click="$router.push('fragenAntwortenEintragen')">
                Fragen & Antworten Eintragen</button>
            <button v-if="store.isLoggedIn" v-on:click="$router.push('fragenEinsenden')">
                Neue Fragen Einsenden</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 0vh;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30%;
    margin-top: 5%;
}

.btn-container-1 {
    min-width: 200px;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

button {
font-weight: 700;
font-size: 1.2rem;
color: #000000;
background-color: #00A7B5;
padding: 10px 30px;
border: solid #000000 4px;
box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
border-radius: 15px;
transition : 1000ms;
transform: translateY(0);
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
}
button:hover{

    transition : 1000ms;
padding: 10px 50px;
transform : translateY(-0px);
background-color: #ffffff00;
color: #000000;
border: solid 4px #000000;
}

img {
    min-width: 200px;
    width: 30%;
}

@media(max-width: 975px) {
    .btn-container-1 {
        width: 60%;
    }
    img {
        width: 50%;
    }
}

@media(max-width: 455px) {
    .container {
        margin-top: 20%;
    }
}
</style>
