import { reactive } from 'vue'

const store = reactive({
    isLoggedIn: false,
    loggedInAsAdmin: false,
    lobby: {
        groupName: "",
        players: [],
        lobbyId: Number,
        gameMode: "",
    },
})


export { store }
