//every object in the array themes is one theme.
const themes = [
    {
        q0: {
            question: "frage 1",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 1.", id: 1},
                {answer2: "Zweite Antwort auf Frage 1.", id: 2},
                {answer3: "Dritte Antwort auf Frage 1.", id: 3},
                {answer4: "Fierte Antwort auf Frage 1.", id: 4},
            ],
            rightAnswer: 4
        },
        q1: {
            question: "frage 2",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 2.", id: 1},
                {answer2: "Zweite Antwort auf Frage 2.", id: 2},
                {answer3: "Dritte Antwort auf Frage 2.", id: 3},
                {answer4: "Fierte Antwort auf Frage 2.", id: 4},
            ],
            rightAnswer: 4
        },
        q2: {
            question: "frage 3",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 3.", id: 1},
                {answer2: "Zweite Antwort auf Frage 3.", id: 2},
                {answer3: "Dritte Antwort auf Frage 3.", id: 3},
                {answer4: "Fierte Antwort auf Frage 3.", id: 4},
            ],
            rightAnswer: 4
        },
        q3: {
            question: "frage 4",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 4.", id: 1},
                {answer2: "Zweite Antwort auf Frage 4.", id: 2},
                {answer3: "Dritte Antwort auf Frage 4.", id: 3},
                {answer4: "Fierte Antwort auf Frage 4.", id: 4},
            ],
            rightAnswer: 4
        },
    },
];

const lobbyStore = {
    lobbies: new Map(),

    themes,

    addLobby,

    findLobby,

    keysToRemoveLobby: [],

}

function addLobby({lobbyId, gameMode, groupName, players, theme, time, numberQuestions}){
    const userAnswers = new Map();
    userAnswers.set(players[0], [false, false, false, false])

    this.lobbies.set(lobbyId, {
        lobbyId, 
        groupName, 
        players, 
        gameMode, 
        isRunning: false,
        question: this.themes[theme].q0.question,
        answers: this.themes[theme].q0.answers,
        theme,
        time,
        roundTime: time,
        numberQuestions,
        iteration: 0,
        evaluatedAnswers: 0,
        userAnswers,
        isChange: false,
        roundCounter: 0,
        gameIsOver: false,
    });

    return this.lobbies.get(lobbyId)
}

function findLobby({lobbyId, playerName}){
    const lobby = this.lobbies.get(lobbyId);

    if(!lobby){
        return 1
    }

    lobby.players.push(playerName)
    lobby.userAnswers.set(playerName, [false, false, false, false])
    return lobby
}


module.exports = {lobbyStore};
