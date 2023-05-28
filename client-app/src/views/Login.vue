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
        <label for="email">E-Mail Adresse</label>
        <input type="text" id="email" name="email" v-model="credentials.email" /><br /><br />
        <label for="password">password</label>
        <input
            type="text"
            id="password"
            name="password"
            v-model="credentials.password"
        /><br /><br />
        <button type="button" v-on:click="loginUser">Einloggen</button>
        <button type="button">Registrieren</button>

        <div class="link-container">
            <router-link to="">password vergessen</router-link>
        </div>
    </div>
</template>

<style scoped></style>
