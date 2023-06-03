<script setup>
import { ref } from 'vue'
import CreateLobby from '../components/CreateLobby.vue'
import JoinLobby from '../components/JoinLobby.vue'
const showContainerBtn1 = ref(true)
const showCreateLobby = ref(false)
const showJoinLobby = ref(false)

//hide container-btn-1 and show createLobby or joinLobby.vue
function hideContainerBtn1(e) {
    if (e.target.id === 'create-lobby') {
        showContainerBtn1.value = false
        showCreateLobby.value = true
        showContainerBtn1.value = false
    }
    if (e.target.id === 'join-lobby') {
        showContainerBtn1.value = false
        showJoinLobby.value = true
        showContainerBtn1.value = false
    }
}

//show container-btn-1 and hide createLobby or joinLobby.vue
function backToContainerBtn1() {
    showContainerBtn1.value = true
    showCreateLobby.value = false
    showJoinLobby.value = false
}
</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO" />
        <div class="container-btn-1" v-if="showContainerBtn1" v-on:click="hideContainerBtn1">
            <button id="create-lobby">Create Lobby</button>
            <button id="join-lobby">Join Lobby</button>
        </div>
        <CreateLobby v-if="showCreateLobby" v-on:back-to-lobby="backToContainerBtn1" />
        <JoinLobby v-if="showJoinLobby" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50vh;
    margin-top: 10%;
}

img {
    min-width: 180px;
    max-width: 20vw;
    margin-left: 15%;
}

.container-btn-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 20vh;
    margin-right: 15%;
}

Button {
    text-transform: uppercase;
    border: 3px solid black;
    transition: border 0.1s ease;
    margin: 0.5vh;
}

button:hover {
    border: 4px solid black;
}

@media (max-width: 768px) { 
    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container-btn-1 {
        margin-top: 20px;
        width: 100%;
        margin-right: 0%;
    }

    img {
    margin-left: 0%;
}
}
</style>

