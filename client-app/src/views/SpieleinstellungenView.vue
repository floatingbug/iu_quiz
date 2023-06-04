<script setup>
</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
        <label for="Thema">Themenbereich:</label>
        <select id="Thema">
            <option value="Thema1">Thema 1</option>
            <option value="Thema2">Thema 2</option>
            <option value="Thema3">Thema 3</option>
        </select>

        <label for="AnzFragen">Anzahl Fragen:</label>
        <select id="AnzFragen">
            <option value="10Fragen">10 Fragen</option>
            <option value="15Fragen">15 Fragen</option>
            <option value="20Fragen">20 Fragen</option>
        </select>

        <label for="ZeitProFrage">Zeit pro Frage:</label>
        <select id="ZeitProFrage">
            <option value="30sec">30 Sekunden</option>
            <option value="45sec">45 Sekunden </option>
            <option value="60sec">60 Sekunden</option>
        </select>
        <button id="startQuiz">Quiz Starten</button>
        
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