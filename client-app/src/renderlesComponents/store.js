import { reactive } from 'vue'

const store = reactive({
    isLoggedIn: false,
    loggedInAsAdmin: false,
    playerName: "",
    lobby: {
        groupName: "",
        players: [],
        playersPoints: [],
        lobbyId: Number,
        gameMode: "",
        theme: Number,
        time: Number,
        numberQuestions: Number,
        iteration: 0,
        question: "",
        answers: [],
    },
   
})


export { store }
