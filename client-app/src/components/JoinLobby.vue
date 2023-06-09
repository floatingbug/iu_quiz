<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {store} from '../renderlesComponents/store.js';
import apiCall from '../renderlesComponents/ApiCall.vue';
const router = useRouter();
const lobbyId = ref("");
const playerName = ref("");
const errMsg = ref("");
const apiCallRef = ref(null);
const emit = defineEmits(['backToLobby'])

function checkInput(){
    if(lobbyId.value === "" || playerName.value === ""){
        errMsg.value = "Gruppen-ID und Spielername werden benötigt."
        return
    }

    errMsg.value = "";
}

function joinLobby(){
    //find lobby by lobbyId on server and add new player to server
    const data = {lobbyId: lobbyId.value, playerName: playerName.value};
    const request = {
        method: 'post',
        url: '/add-player-to-lobby',
        data: data
    };

    apiCallRef.value.call(request, (result)=>{
        if(result.code === 1){
            console.log(result.msg)
            return
        }

        store.lobby = result.data;
        console.log(store.lobby)

        if(store.lobby.gameMode === "koop"){
            router.push('kooperativ')
        }
        else{
            router.push('kollaborativ')
        }
    })
}

</script>

<template>
    <apiCall ref="apiCallRef" />
  <div class="container">

    <div class="right-column">
      <div class="form-container">
        <div class="form-input">
            <label for="lobbyId">Lobby ID:</label>
                <input
                    id="lobbyId"
                    v-model="lobbyId"
                    type="text"
                    placeholder="Geben Sie die ID der Lobby ein, der Sie joinen möchten"/>
        </div>
        <div class="form-input">
            <label for="playername">Spielername:</label>
                <input
                    id="playername"
                    v-model="playerName"
                    type="text"
                    placeholder="Geben Sie ihren Spielernamen ein"
                />
        </div>
        <p class="err-msg" v-if="errMsg">{{errMsg}}</p>
        <div class="button-container">
            <button v-on:click="checkInput">Join Lobby</button>
            <button v-on:click="$emit('backToLobby')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10%;
}

.logo {
  max-width: 100%;
  height: auto;
  margin-left: 10%; 
}

.right-column {
  flex: 1;
  min-width: 500px;
  padding-left: 10%; 
  padding-right: 10%; 
  align-content: center;
}

.form-container {
  width: 100%;
}

.form-input {
  margin-bottom: 10%;
  margin-right: 10%;
}

.form-container label {
  text-align: start;
  font-size: 1.4rem;
  width: 100%;
  color: black;
}

.form-container input {
  font-size: 1.4rem;
  width: 100%; 
  padding: 0.5rem;
  margin-right: 10%;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-direction: row;
}

.button-container button {
  min-width: 150px;
  max-width: 200px;
  background-color: #00a7b5;
  border: 3px solid black;
  transition: border 0.1s ease;
  margin-right: 10%;
  margin-top: 2rem;
}

.button-container button:hover {
  background-color: #0096a3;
}

.link-container {
  margin-top: 1rem;
}

/* Media Queries */
@media screen and (max-width: 945px) {
  .container {
    flex-direction: column;
    align-items: center; 
  }

  .left-column, .right-column {
    min-width: unset;
    padding: 10%; 
    text-align: center;
  }

  .logo {
    margin-left: 0; 
    margin-bottom: 10%; 
  }

  .form-container {
    align-items: center; 
  }

  .form-input {
    margin-bottom: 5%; 
    margin-right: 0; 
  }



  .form-container input {
    width: 100%; 
  }

  .button-container {
    flex-direction: column; 
    align-items: center; 
    margin-top: 1rem; 
    padding-bottom: 4rem;
  }

  .button-container button {
    margin-bottom: 1rem;
    margin-right: 0;
  }
}
</style>
