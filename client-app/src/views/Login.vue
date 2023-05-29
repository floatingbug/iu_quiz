<script setup>
import { reactive, ref } from 'vue'
import apiCall from '../renderlesComponents/ApiCall.vue'
import { store } from '../renderlesComponents/store.js'
const apiCallRef = ref()
const credentials = reactive({
    email: '',
    password: ''
})

function loginUser() {
    const request = {
        method: 'post',
        url: '/login-user',
        data: credentials
    }

    apiCallRef.value.call(request, (result) => {
        if (result.code === 0) {
            store.isLoggedIn = true
            console.log(result.msg)
        }
        if (result.code === 1) {
            console.log(result.msg)
        }
        if (result.code === 2) {
            console.log(result.msg)
        }
    })
}
</script>

<template>
    <apiCall ref="apiCallRef" />
    <div class="container"> 
        <div class="container-input">
            <img src="../assets/logo.png" alt="LOGO" />
                <div>
                    <label for="email">E-Mail Adresse</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        v-model="credentials.email"
                        placeholder="E-Mail Adresse" 
                    /><br /><br />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        v-model="credentials.password"
                        placeholder="Password"
                    /><br /><br />
                </div>

                <div class="link-container">
                    <router-link to="">Password vergessen</router-link>
                </div>

                <div>
                    <button type="button" v-on:click="loginUser">Einloggen</button>
                </div><br /><br />
            
                <div>
                    <button type="button">Registrieren</button>
                </div><br /><br />

        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    height: 8px;
    display: flex;
    align-items: right;
    justify-content: right;
}

.container-input {
    position: absolute;
    width: 590px;
    height: 200px;
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
    min-width: 500px;
    max-width: 800px;
}

input::placeholder {
    font-size: 1.4rem;
}

.container-input > div > button {
    min-width: 150px;
    max-width: 50px;
    background-color: #00a7b5;
    border: 3px solid black;
    transition: border 0.1s ease;
    margin: 0.5vh;

}


.container-input > div > button:hover {
    border: 4px solid black;
}


img {
    position: absolute;
    min-width: 180px;
    max-width: 20vw;
    top: -80px;
    left: -140%;
}


</style>
