<script setup>
import {ref} from 'vue';
import CreateLobby from '../components/CreateLobby.vue';
import JoinLobby from '../components/JoinLobby.vue';
const showContainerBtn1 = ref(true);
const showCreateLobby = ref(false);
const showJoinLobby = ref(false);

//hide container-btn-1 and show createLobby or joinLobby.vue
function hideContainerBtn1(e){
    if(e.target.id === "create-lobby"){
        showCreateLobby.value = true;
        showContainerBtn1.value = false;
    }
    if(e.target.id === "join-lobby"){
        showJoinLobby.value = true;
        showContainerBtn1.value = false;
    }
}

//show container-btn-1 and hide createLobby or joinLobby.vue
function backToContainerBtn1(){
    showContainerBtn1.value = true;
    showCreateLobby.value = false;
    showJoinLobby.value = false;
}
</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO">
        <div class="container-btn-1" v-if="showContainerBtn1" v-on:click="hideContainerBtn1">
            <button id="create-lobby">Create Lobby</button>
            <button id="join-lobby">Join Lobby</button>
        </div>
		<CreateLobby v-if="showCreateLobby" v-on:back-to-lobby="backToContainerBtn1"/>
		<JoinLobby v-if="showJoinLobby"/>
    </div>
</template>


<style scoped>
.container {
    position: relative;
    height: 50vh;
}

img {
    position: absolute;
    min-width: 200px;
    max-width: 30vw;
    top: 0px;
    right: 5%;
}

.container-btn-1 {
    position: absolute;
    bottom: 10vh;
    left: 20vw;
    width: 20vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}


@media(max-width: 370px) {
    .container-btn-1 {
        left: 0;
        margin-left: 20px;
    }
}


</style>
