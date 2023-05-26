<script setup>
import {reactive, ref} from 'vue';
import apiCall from '../renderlesComponents/ApiCall.vue';
const apiCallRef = ref();
const credentials = {
    email: "",
    password: ""
};

function loginUser(){
    const request = {
        method: 'post',
        url: '/login-user',
        data: credentials.value
    };
    
    apiCallRef.value.call(request, (result)=>{
        console.log(result)
    })
}
</script>

<template>
    <apiCall ref="apiCallRef" />
<label for="email">E-Mail Adresse</label>
<input type="text" id="email" name="email" v-model="credentials.email"><br><br>
<label for="password">password</label>
<input type="text" id="password" name="password" v-model="credentials.password"><br><br> 

<button type="button" v-on:click="loginUser">Einloggen</button>
<button type="button">Registrieren</button>

<div class="link-container">
<router-link to="">password vergessen</router-link>
</div>

</template>


<style scoped>

</style>
