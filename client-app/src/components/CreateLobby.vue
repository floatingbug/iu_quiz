<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {store} from '../renderlesComponents/store.js';
import apiCall from '../renderlesComponents/ApiCall.vue';
const apiCallRef = ref();
const router = useRouter();
const groupName = ref("");
const playerName = ref("");
const errMsg = ref("");
const chooseGamemode = ref(false);
const emit = defineEmits(['backToLobby'])


function createLobby(){
    if(groupName.value === "" || playerName.value === ""){
        errMsg.value = "Gruppen- und Spielername werden benötigt."
        return
    }

    store.lobby.players = [];
    store.lobby.groupName = groupName.value;
    store.lobby.players.push(playerName.value);
    store.lobby.lobbyId = crypto.randomUUID();

    const request = {
        method: 'post',
        url: '/create-lobby',
        data: store.lobby
    };

    apiCallRef.value.call(request, (result)=>{
        if(result.code == 1){
            errMsg.value = "Lobby konnte auf dem Server nicht erstellt werden."
            console.log(result.msg)
            return
        }
        
    })

    errMsg.value = "";
    chooseGamemode.value = true;
}
</script>

<template>
    <apiCall ref="apiCallRef" />
    <div class="container">
        <div class="container-input">
            <div v-if="!chooseGamemode">
                <div>
                    <label for="groupname">Gruppennamen:</label>
                </div>
                <div>
                <input
                    id="groupname"
                    v-model="groupName"
                    type="text"
                    placeholder="Geben Sie einen Gruppennamen ein"
                />
                </div>
            </div>
            <div v-if="!chooseGamemode">
                <div>
                    <label for="playername">Spielername:</label>
                </div>
                <div>
                <input
                    id="playername"
                    v-model="playerName"
                    type="text"
                    placeholder="Geben Sie Ihren Spielernamen ein"
                />
                </div>
            </div>
            <p class="err-msg" v-if="errMsg">{{errMsg}}</p>
            <div>
                <button v-on:click="createLobby" v-if="!chooseGamemode">Create Lobby</button>
                <button v-if="chooseGamemode" v-on:click="$router.push('kooperativ')">Kooperatives Spiel</button>
                <button v-if="chooseGamemode" v-on:click="$router.push('kollaborativ')">Kollaboratives Spiel</button>
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
    padding: 1rem;
    margin-right: 15%;
}

.container-input {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
}

label {
    font-size: 1.5rem;
    color: black;
    width: 100%;
}

input {
    font-size: 1.5rem;
    padding: 0.5rem;
}

#groupname #playername{
    width: 80%;
}

input::placeholder {
    font-size: 1rem;
}

button {
    padding: 0.5rem 1rem;
    background-color: #00a7b5;
    border: 3px solid black;
    transition: border 0.1s ease;
    margin-top: 5%;
}

button:hover {
    border: 4px solid black;
}

@media (max-width: 600px) {

    .container{
        margin-right: 0%;
    }
    .container-input {
        width: 90%;
    }

    label, input {
        font-size: 1.2rem;
    }

    input::placeholder {
        font-size: 1.2rem;
    }

    button {
        padding: 1rem 2rem;
    }

}

</style>
