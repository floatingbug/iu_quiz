<script setup>
</script>


<template>
    <div class="container">
        <div class="choose-question">
            <select id="" name="">
                <option value=""></option>
            </select>
            <textarea id="" name="" cols="30" rows="10"></textarea>
            <button>Auswählen</button>
        </div>
        <div class="config-question">
            <label for=""></label>
            <input type="">
            <label for=""></label>
            <input type="">
            <label for=""></label>
            <input type="">
            <label for=""></label>
            <input type="">
            <label for=""></label>
            <input type="">
            <button>Speichern</button>
        </div>
    </div>
</template>


<style scoped>
.container {
    height: 50vh;
    display:flex;
    justify-content: center;
    gap: 10%;
}

.choose-question {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5%;
    margin-left:10%;
}

.choose-question textarea {
    flex:80%;
}

.choose-question select {
    flex: 10%;
}

.choose-question button {
    flex: 10%;
    width: 20%;
    height: 100%;
    margin-left: auto;
}

.config-question {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4%;
    margin-right: 10%;
}

.config-question input {
    height: 100%;
    min-width: 200px;
}

.config-question button {
    width: 20%;
    height: 100%;
    margin-left: auto;
}

@media(max-width: 976px){
    .container {
        flex-direction: column;
        align-items: center;
    }
    .config-question {
        width: 80%;
        margin-right: 0%;
    }
    .choose-question {
        width: 80%;
        margin-left: 0%;
    }
}
</style>
