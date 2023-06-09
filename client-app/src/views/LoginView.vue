<script setup>
import { reactive, ref } from 'vue'
import apiCall from '../renderlesComponents/ApiCall.vue'
import { store } from '../renderlesComponents/store.js'
const apiCallRef = ref()
const errMsg = ref("");
const credentials = reactive({
    email: '',
    password: ''
})

function checkInput(){
    if(email.value === "" || password.value === ""){
        errMsg.value = "E-Mail-Adresse und Passwort werden benoetigt."
        return
    }

    errMsg.value = "";
}

function loginUser() {
    const request = {
        method: 'post',
        url: '/login-user',
        data: credentials
    }

    apiCallRef.value.call(request, (result) => {
        if (result.code === 0) {
            if(credentials.email === "admin"){
                store.loggedInAsAdmin = true;
            }
            else{
                store.isLoggedIn = true;
            }
        }
        console.log(result.msg)
    })
}
</script>

<template>
    <apiCall ref="apiCallRef" />
  <div class="container">
    <div class="left-column">
      <img class="logo" src="../assets/logo.png" alt="LOGO" />
    </div>
    <div class="right-column">
      <div class="form-container">
        <div class="form-input">
          <label for="email">E-Mail Adresse</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model="credentials.email"
          />
        </div>
        <div class="form-input">
          <label for="password">Passwort</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="credentials.password"
          />
        </div>
        <p class="err-msg" v-if="errMsg">{{errMsg}}</p>

        <div class="link-container">
          <router-link to="">Passwort vergessen</router-link>
        </div>

        <div class="button-container">
          <button type="button" v-on:click="checkInput">Einloggen</button>
          <button type="button">Registrieren</button>
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





