//every object in the array themes is one theme.
const themes = [
    {
        q1: {
            question: "frage 1",
            answers: {
                answer1: "Erste Antwort auf Frage 1.",
                answer2: "Zweite Antwort auf Frage 1.",
                answer3: "Dritte Antwort auf Frage 1.",
                answer4: "Vierte Antwort auf Frage 1.",
            },
            rightAnswer: 4
        },
        q2: {
            question: "frage 2",
            answers: {
                answer1: "Erste Antwort auf Frage 2.",
                answer2: "Zweite Antwort auf Frage 2.",
                answer3: "Dritte Antwort auf Frage 2.",
                answer4: "Vierte Antwort auf Frage 2.",
            },
            rightAnswer: 4
        },
        q3: {
            question: "frage 3",
            answers: {
                answer1: "Erste Antwort auf Frage 3.",
                answer2: "Zweite Antwort auf Frage 3.",
                answer3: "Dritte Antwort auf Frage 3.",
                answer4: "Vierte Antwort auf Frage 3.",
            },
            rightAnswer: 4
        },
        q4: {
            question: "frage 4",
            answers: {
                answer1: "Erste Antwort auf Frage 4.",
                answer2: "Zweite Antwort auf Frage 4.",
                answer3: "Dritte Antwort auf Frage 4.",
                answer4: "Vierte Antwort auf Frage 4.",
            },
            rightAnswer: 4
        },
    },
];

const lobbyStore = {
    lobbies: new Map(),

    themes,

    rightAnswers: new Map(),

    addLobby,

    findLobby,
}

function addLobby({lobbyId, gameMode, groupName, players, theme, time, numberQuestions}){
    this.lobbies.set(lobbyId, {
        lobbyId, 
        groupName, 
        players, 
        gameMode, 
        isRunning: false,
        theme,
        time,
        numberQuestions,
        questionId: "",
        questions: [],
    });

    return this.lobbies.get(lobbyId)
}

function findLobby({lobbyId, playerName}){
    const lobby = this.lobbies.get(lobbyId);

    if(!lobby){
        return 1
    }

    lobby.players.push(playerName)
    return lobby
}


module.exports = {lobbyStore};
