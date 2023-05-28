<script setup>
const emit = defineEmits(['backToLobby'])
</script>

<template>
    <div class="container">
        <div class="container-input">
            <div>
                <label for="groupname">Gruppennamen:</label>
                <input
                    id="groupname"
                    v-model="groupName"
                    type="text"
                    placeholder="Geben Sie den Gruppennamen ein"
                />
            </div>
            <div>
                <label for="playername">Spielername:</label>
                <input
                    id="playername"
                    v-model="playerName"
                    type="text"
                    placeholder="Geben Sie den Spielernamen ein"
                />
            </div>
            <div>
                <button>Create Lobby</button>
                <button v-on:click="$emit('backToLobby')">Cancel</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-input {
    position: absolute;
    width: 40vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1vh;
}

.container-input > div {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5vh;
}

.container-input > div * {
    flex: 1;
}

label {
    text-align: start;
    font-size: 1.4rem;
    min-width: 50%;
    color: black;
}

input {
    font-size: 1.4rem;
    min-width: 400px;
    max-width: 30vw;
}

input::placeholder {
    font-size: 1.4rem;
}

.container-input > div > button {
    min-width: 150px;
    max-width: 70%;
    background-color: #00a7b5;
    border: 3px solid black;
    transition: border 0.1s ease;
    margin: 0.5vh;
}

.container-input > div > button:hover {
    border: 4px solid black;
}

.container-input > div:last-child {
    margin-left: 0;
    width: 30vw;
    height: 10vh;
    align-items: center;
}

@media (max-width: 800px) {
    label,
    input {
        font-size: 1.3rem;
    }
    input::placeholder {
        font-size: 1rem;
    }
    input {
        min-width: 300px;
    }
    .container-input {
        width: 50vw;
        height: 25vh;
    }
}

@media (max-width: 600px) {
    label,
    input {
        font-size: 1.2rem;
    }
    input::placeholder {
        font-size: 0.8rem;
    }
    input {
        min-width: 250px;
    }
    .container-input {
        width: 60vw;
        height: 30vh;
    }
}

@media (max-width: 400px) {
    label,
    input {
        font-size: 1.1rem;
    }
    input::placeholder {
        font-size: 0.7rem;
    }
    input {
        min-width: 200px;
    }
    .container-input {
        width: 70vw;
        height: 35vh;
    }
}

@media (max-width: 300px) {
    label,
    input {
        font-size: 1rem;
    }
    input::placeholder {
        font-size: 0.7rem;
    }
    input {
        min-width: 150px;
    }
    .container-input {
        width: 80vw;
        height: 40vh;
    }
}
</style>
