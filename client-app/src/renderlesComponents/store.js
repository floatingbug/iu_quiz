import { reactive } from 'vue'

const store = reactive({
    isLoggedIn: false,
    loggedInAsAdmin: false,
    playerName: '',
    quizStarted: false,
    isModerator: false,
    quizIsCanceled: false,
    isNextRound: true,
    isSinglePlayer: false,
    gameIsOver: false,
    resultOfGame: [],
    score: 0,

    lobby: {
        groupName: '',
        players: [],
        userAnswers: new Map(),
        userAnswersArray: [],
        lobbyId: Number,
        gameMode: '',
        theme: Number,
        time: Number,
        numberQuestions: Number,
        iteration: 0,
        question: '',
        answers: [],
        answerCounter: 0
    }
})

export { store }
