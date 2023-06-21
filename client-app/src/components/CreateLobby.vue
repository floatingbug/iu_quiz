<script setup>
import {ref, reactive,} from 'vue'
import {useRouter} from 'vue-router'
import {store} from '../renderlesComponents/store.js';
import apiCall from '../renderlesComponents/ApiCall.vue';
const apiCallRef = ref();
const router = useRouter();
const settings = reactive({
    groupName: "",
    playerName: "",
    theme: Number,
    numberQuestions: Number,
    time: Number,
});
const errMsg = ref("");
const chooseGamemode = ref(false);
const emit = defineEmits(['backToLobby'])

function checkInput(){
    
    if(settings.groupName === "" || settings.playerName === ""){
        errMsg.value = "Gruppen- und Spielername werden benötigt."
        return
    }

    if(!settings.theme){
        errMsg.value = "Bitte ein Thema auswählen"
        return
    }

    if (!settings.numberQuestions){
        errMsg.value = "Bitte eine Anzahl an Fragen wählen"
        return
    }

    if(!settings.time){
        errMsg.value = "Bitte die Zeit pro Frage wählen"
        return
    }

    //set store settings.
    store.isModerator = true;
    store.lobby.players = [];
    store.lobby.groupName = settings.groupName;
    store.lobby.players.push(settings.playerName);
    store.playerName = settings.playerName;
    store.lobby.lobbyId = crypto.randomUUID();
    store.lobby.theme = parseInt(settings.theme);
    store.lobby.numberQuestions = parseInt(settings.numberQuestions);
    store.lobby.time = parseInt(settings.time);

    
    errMsg.value = "";
    chooseGamemode.value = true;
}

function createLobby(e){
    store.lobby.gameMode = e.target.dataset.gamemode;

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
    
    if(store.lobby.gameMode === "kollab"){
        router.push('kollaborativ')
    }
    if(store.lobby.gameMode === "koop"){
        router.push('kooperativ')
    }
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
                    v-model="settings.groupName"
                    type="text"
                    placeholder="Geben Sie einen Gruppennamen ein"/>
            </div>
        </div>
        <div class="form-input">
            <div v-if="!chooseGamemode">
                <label for="playername">Spielername:</label>
                <input
                    id="playername"
                    v-model="settings.playerName"
                    type="text"
                    placeholder="Geben Sie Ihren Spielernamen ein"
                />
            </div>
        </div>

        <div>
            <div class="form-select" v-if="!chooseGamemode">
              <label for="theme">Themenbereich:</label>
              <select id="theme" v-model="settings.theme">
                <option value="0">Informationstechnik</option>
                <option value="1">Naturwissenschaft</option>
                <option value="2">Geschichte</option>
              </select>
            </div>
        </div>
        <div>
            <div class="form-select" v-if="!chooseGamemode">
              <label for="anzFragen">Anzahl Fragen:</label>
              <select id="anzFragen" v-model="settings.numberQuestions">
                <option value="10">10 Fragen</option>
                <option value="15">15 Fragen</option>
                <option value="20">20 Fragen</option>
              </select>
          </div>
        </div>
        <div>
            <div class="form-select" v-if="!chooseGamemode">
              <label for="counter">Zeit pro Frage:</label>
              <select id="counter" v-model="settings.time">
                <option value=30>30 Sekunden</option>
                <option value=45>45 Sekunden</option>
                <option value=60>60 Sekunden</option>
              </select>
            </div>
        </div> 

        <p class="err-msg" v-if="errMsg">{{errMsg}}</p>
        
        <div class="button-container">
            <button v-if="!chooseGamemode" v-on:click="checkInput">Create Lobby</button>
            <button data-gameMode="koop" v-if="chooseGamemode" v-on:click="createLobby">Kooperatives Spiel</button>
            <button data-gameMode="kollab" v-if="chooseGamemode" v-on:click="createLobby">Kollaboratives Spiel</button>
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
  margin-top: 0
}

.logo {
  max-width: 100%;
  height: auto;
  margin-left: 10%; 
}

label{
    color: black;
    width: 30%;
    align-items: left;
}

.right-column {
  flex: 1;
  min-width: 500px;
  padding-left: 0%; 
  padding-right: 10%; 
  align-content: center;
}

.form-container {
  width: 100%;
  padding-bottom: 20%;
}

.form-input {
  margin-bottom: 1%;
  margin-right: 10%;
}

.form-select {
  margin-bottom: 1%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
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

.form-container select {
  font-size: 1.4rem;
  width: 100%; 
  padding: 0.5rem;
  margin-right: 10%;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
}

.button-container button {
  min-width: 250px;
  max-width: 300px;
  background-color: #00a7b5;
  border: 3px solid black;
  transition: border 0.1s ease;
  margin-right: 5%;
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
    padding-bottom: 20%;
  }

  .form-input {
    margin-bottom: 5%; 
    margin-right: 0; 
  }

  .form-container input {
    width: 100%; 
  }

  .form-select{
    width: 100%;
  }

  .button-container{
    align-items: center;
  }

}
</style>
