<script setup>
import { ref, onMounted } from 'vue'
import CreateLobby from '../components/CreateLobby.vue'
import JoinLobby from '../components/JoinLobby.vue'
import { store } from '../renderlesComponents/store.js'
const showContainerBtn1 = ref(true)
const showCreateLobby = ref(false)
const showJoinLobby = ref(false)
const showReturnToLobby = ref(false)

//hide container-btn-1 and show createLobby or joinLobby.vue
function hideContainerBtn1(e) {
    if (e.target.id === 'create-lobby') {
        showContainerBtn1.value = false
        showCreateLobby.value = true
        showContainerBtn1.value = false
    }
    if (e.target.id === 'join-lobby') {
        showContainerBtn1.value = false
        showJoinLobby.value = true
        showContainerBtn1.value = false
    }
}

//show container-btn-1 and hide createLobby or joinLobby.vue
function backToContainerBtn1() {
    showContainerBtn1.value = true
    showCreateLobby.value = false
    showJoinLobby.value = false
}
onMounted(() => {
    if (store.lobby.gameMode) {
        showReturnToLobby.value = true
        showContainerBtn1.value = false
    }
})
</script>

<template>
    <apiCall ref="apiCallRef" />
    <div class="container" v-if="!store.isLoggedIn && !store.loggedInAsAdmin">
        Du must angemeldet sein, um Lobbies zu erstellen oder beitreten zu können.
    </div>
    <div class="container" v-if="store.isLoggedIn || store.loggedInAsAdmin">
        <div class="left-column">
            <img class="logo" src="../assets/logo.png" alt="LOGO" />
        </div>
        <div class="right-column">
            <div class="form-container">
                <div
                    class="container-btn-1"
                    v-if="showContainerBtn1"
                    v-on:click="hideContainerBtn1"
                >
                    <button id="create-lobby" v-if="!store.isSinglePlayer">Create Lobby</button>
                    <button id="join-lobby" v-if="!store.isSinglePlayer">Join Lobby</button>
                </div>
                <button v-if="showReturnToLobby" v-on:click="$router.push('kooperativ')">
                    Return to Lobby
                </button>
                <CreateLobby v-if="showCreateLobby || store.isSinglePlayer" v-on:back-to-lobby="backToContainerBtn1" />
                <JoinLobby v-if="showJoinLobby" v-on:back-to-lobby="backToContainerBtn1" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10%;
}

.left-column {
    flex: 1;
    min-width: 200px;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
}

.logo {
    max-width: 80%;
    height: auto;
    margin-left: 20%;
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

#join-lobby {
    margin-top: 10%;
}

.container-btn-1 button:hover {
    background-color: #0096a3;
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
}
</style>
