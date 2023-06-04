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

    <div class="right-column">
      <div class="form-container">
        <div class="form-input">
            <div v-if="!chooseGamemode">
                <label for="groupname">Gruppennamen:</label>
                <input
                    id="groupname"
                    v-model="groupName"
                    type="text"
                    placeholder="Geben Sie einen Gruppennamen ein"
                />
            </div>
        </div>
        <div class="form-input">
            <div v-if="!chooseGamemode">
                    <label for="playername">Spielername:</label>
                <input
                    id="playername"
                    v-model="playerName"
                    type="text"
                    placeholder="Geben Sie Ihren Spielernamen ein"
                />
            </div>
        </div>
        <p class="err-msg" v-if="errMsg">{{errMsg}}</p>
        <div class="button-container">
            <button v-on:click="createLobby" v-if="!chooseGamemode">Create Lobby</button>
                <button v-if="chooseGamemode" v-on:click="$router.push('kooperativ')">Kooperatives Spiel</button>
                <button v-if="chooseGamemode" v-on:click="$router.push('kollaborativ')">Kollaboratives Spiel</button>
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

.left-column {
  flex: 1;
  min-width: 200px;
  padding-right: 10%; 
  text-align: center;
}

.logo {
  max-width: 100%;
  height: auto;
  margin-left: 10%; 
}

.right-column {
  flex: 1;
  min-width: 200px;
  padding-left: 10%; 
  padding-right: 10%; 
}

.form-container {
  display: flex;
  flex-direction: column;
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
}

.button-container button {
  min-width: 150px;
  max-width: 200px;
  background-color: #00a7b5;
  border: 3px solid black;
  transition: border 0.1s ease;
  margin-right: 10%;
}

.button-container button:hover {
  background-color: #0096a3;
}

.link-container {
  margin-top: 1rem;
}

/* Media Queries */
@media screen and (max-width: 768px) {
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
