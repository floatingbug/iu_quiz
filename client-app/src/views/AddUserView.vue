<script setup>
import { reactive, ref } from 'vue'
import ApiCall from '../renderlesComponents/ApiCall.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
const apiCallRef = ref()
const errMsg = ref('')
const state = reactive({
    email: '',
    password: ''
})

function checkInput() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (state.email === '' || state.password === '') {
        errMsg.value = 'Eine gültige E-Mail-Adresse und Passwort werden benötigt.'
        return false
    } else if (!emailRegex.test(state.email)) {
        errMsg.value = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
        return false
    }

    errMsg.value = ''
    return true
}

function addUser() {
    //todo: prüfen ob email und password nicht leer sind. (ist erledigt)
    if (!checkInput()) {
        return
    }

    const request = {
        method: 'post',
        url: '/add-user',
        data: {
            email: state.email,
            password: state.password
        }
    }

    apiCallRef.value.call(request, (result) => {
        console.log(result.msg)
        router.push('login-user')
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
                    <input type="text" id="email" name="email" v-model="state.email" />
                </div>
                <div class="form-input">
                    <label for="password">Passwort</label>
                    <input type="password" id="password" name="password" v-model="state.password" />
                </div>
                <p class="err-msg" v-if="errMsg">{{ errMsg }}</p>

                <div class="button-container">
                    <button class="submit-button" v-on:click="addUser">
                        Registrierung abschließen
                    </button>
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
    min-width: 270px;
    max-width: 270px;
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
    color: black;
    text-decoration: underline;
}

.link-container .password-link {
    font-weight: bold;
    color: black;
}

/* Media Queries */
@media screen and (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .left-column,
    .right-column {
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
