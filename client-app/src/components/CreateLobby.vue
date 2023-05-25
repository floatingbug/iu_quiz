<script setup>
const props = defineProps(['showCreateLobby']);
function backToLobby(){
    console.log(props.showCreateLobby);
}
</script>

<template>
    <div class="container">
        <div class="container-input">
            <div>
                <label for="groupname">Gruppennamen:</label>
                <input type="text">
            </div>
            <div>
                <label for="playername">Spielername:</label>
                <input type="text">
            </div>
            <div>
                <button>Create Lobby</button>
                <button v-on:click="backToLobby">Cancel</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    position: relative;
    height: 50vh;
}

.container-input {
    position: absolute;
    width: 40vw;
    height: 15vh;
    top: 20vh;
    left: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container-input>div {
    display: flex;
    flex-wrap: wrap;
}

.container-input>div * {
    flex: 1;
}

label {
    font-size: 1.4rem;
    text-align: end;
    min-width: 50%;
}

input {
    font-size: 1.4rem;
    min-width: 200px;
    max-width: 30vw;
}

.container-input>div>button {
    min-width: 30%;
    max-width: 80%;
}

.container-input>div:last-child {
    margin-left: auto;
    width: 30vw;
}

@media(max-width: 1000px) {
    label {
        text-align: start;
    }
    
    .container-input>div>button {
        min-width: 150px;
        max-width: 70%;
    }

    .container-input {
        height: 25vh;
    }
    
    .container-input>div:last-child {
        margin-left: 0;
        height: 10vh;
        align-items: center;
    }
}
</style>
