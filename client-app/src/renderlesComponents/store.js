import { reactive } from 'vue'

const store = reactive({
    isLoggedIn: false,
    loggedInAsAdmin: false,
    game: {
        groupName: "",
        gameName: "",
        gameId: Number
    }
    gameState: {
        player: []
    }
})

export { store }
