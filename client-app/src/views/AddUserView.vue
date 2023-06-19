<script setup>
import {reactive, ref} from 'vue';
import ApiCall from '../renderlesComponents/ApiCall.vue';
const apiCallRef = ref();
const state = reactive({
    email: "",
    password: "",
});

function addUser(){
    //todo: prüfen ob email und password nicht leer sind.

    const request = {
        method: "post",
        url: "/add-user",
        data: {
            email: state.email,
            password: state.password,
        }
    };

    apiCallRef.value.call(request, (result)=>{
        console.log(result.msg)
    });
}
</script>

<template>
    <ApiCall ref="apiCallRef" />
    <input type="email" v-model="state.email">
    <input type="password" v-model="state.password">
    <button v-on:click="addUser">submit</button>
</template>

<style scoped>
</style>
