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
    
	quiz:{
        question:"Test Frage",
        answer1:"Test Antwort 1",
        answer2:"Test Antwort 2",
        answer3:"Test Antwort 3",
        answer4:"Test Antwort 4",
        rightAnswer:"Test Richtige Antwort",
        points:Number,
    },

})


export { store }
