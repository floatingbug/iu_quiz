<script setup>
import {ref} from 'vue';
import CreateLobby from '../components/CreateLobby.vue';
import JoinLobby from '../components/JoinLobby.vue';
const showContainerBtn1 = ref(true);
const showCreateLobby = ref(false);
const showJoinLobby = ref(false);
const showBackButton = ref(false);

//hide container-btn-1 and show createLobby or joinLobby.vue
function hideContainerBtn1(e){
    showContainerBtn1.value = false;
    if(e.target.id === "create-lobby"){
        showCreateLobby.value = true;
        showBackButton.value = true;
    }
    if(e.target.id === "join-lobby"){
        showJoinLobby.value = true;
        showBackButton.value = true;
    }
}

//show container-btn-1 and hide createLobby or joinLobby.vue
function backToContainerBtn1(){
    showContainerBtn1.value = true;
    showBackButton.value = false;
    showCreateLobby.value = false;
    showJoinLobby.value = false;
}
</script>

<template>
    <div class="container-lobby">
        <div class="container-logo">
            <div class="logo">
                <img src="../assets/logo.png" alt="LOGO">
            </div>
        </div>
        <div class="container-btn-1" v-if="showContainerBtn1" v-on:click="hideContainerBtn1">
            <button id="create-lobby">Create Lobby</button>
            <button id="join-lobby">Join Lobby</button>
        </div>
        <button id="back-btn" v-if="showBackButton" v-on:click="backToContainerBtn1">Back</button>
        <CreateLobby v-if="showCreateLobby"></CreateLobby>
        <JoinLobby v-if="showJoinLobby"></JoinLobby>
    </div>
</template>


<style scoped>
.container-lobby{
    display: flex;
    flex-direction: column;
    height: 50vh;
}

.container-btn-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    min-height: 15%;
    margin-left: 10%;
    margin-top: 20%;
} 

button {
    height: 40%;
    font-size: 1.4rem;
}

.container-logo {
    display: flex;
    justify-content: flex-end;
    margin-top: 20%;
    margin-left: 20%;
}

.logo {
    margin-right: 10vw;
}

#back-btn {
    min-width: 50px;
    max-width: 100px;
    height: 2vh;
    font-size: 1rem;
    margin-left: 10vw;
}

@media(max-width: 780px){
    .container-btn-1{
        width: 50%;
    }
}

@media(max-width: 370px){
    .container-btn-1{
        margin-left: 0;
        width: 100%;
    }
}

</style>
