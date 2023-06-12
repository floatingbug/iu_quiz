import { reactive } from 'vue'

const store = reactive({
    isLoggedIn: false,
    loggedInAsAdmin: false,
    lobby: {
        groupName: "",
        players: [],
        playersPoints: [],
        lobbyId: Number,
        gameMode: "",
        theme: "",
        time: Number,
        numberQuestions: Number,
    },
})


export { store }
