<script setup></script>

<template>
    <div class="container">
        <div class="config-question">
            <label for="theme">Themenbereich:</label>
            <input type="theme" />
            <label for="question">Frage:</label>
            <input type="question" />
            <label for="answer1">Antwort 1:</label>
            <input type="answer1" />
            <label for="answer2">Antwort 2:</label>
            <input type="answer2" />
            <label for="answer3">Antwort 3:</label>
            <input type="answer3" />
            <label for="answer4">Antwort 4:</label>
            <input type="answer4" />
            <div class="button">
                <button>Einsenden</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    height: 30vh;
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: larger;
    margin-top: 5vw;
}

.config-question {
    display: flex;
    flex-direction: column;
    width: 40%;
    
}
.button{
    margin-top: 2vw;
    margin-left: auto;
}

.config-question input {
    height: 1.8vw;
}
</style>
