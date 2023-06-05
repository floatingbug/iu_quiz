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

    addPlayer,
})

function addPlayer(playerName){
    this.lobby.players.push(playerName)
}


export { store }
