import {store} from './store.js';
const API_URL_LOCAL = "http://localhost:8000";
const API_URL_SERVER = 'http://194.195.241.51:8000';
const API_URL = API_URL_SERVER;

const handleGame = {
    startFetchGamedata
}

function startFetchGamedata() {
    const eventSource = new EventSource(`${API_URL}/fetch-game-data?id=${store.lobby.lobbyId}`)
    let lobby

    eventSource.onmessage = async function (event) {
        //if payload is empty close execution.
        if (!event.data) {
            return
        }

        //try to parse json-string in json-object.
        try {
            lobby = await JSON.parse(event.data)
        } catch {
            console.log('fail to parse json')
            eventSource.close()
            return
        }
    

        //close ssh-connection if server can't find lobby.
        if (lobby.data === 'quiz-canceled') {
            console.log('quiz canceled')
            store.quizIsCanceled = true
            eventSource.close()
            return
        }

        //close ssh-connection if game is finished.
        if (lobby.gameIsOver) {
            
            //save player answers.
            lobby.userAnswersArray.forEach((user) => {
                if (user[0] === store.playerName) {
                    store.resultOfGame = user[1]
                }
            })

            console.log(store.resultOfGame)

            //set score.
            store.resultOfGame.forEach((point) => (point === true ? store.score++ : null))
           
            store.quizIsCanceled = true
            store.gameIsOver = true;
            eventSource.close()
            return
        }

        //save lobby to store.lobby.
        store.lobby = lobby

        //if koop then set store.isNextRount to true if one question ist answered.
        if(store.lobby.gameMode === 'koop'){
            store.isNextRound = true
        }

        //if every user answerd the current question, set store.isNextRound to true.
        if (store.lobby.evaluatedAnswers % store.lobby.players.length === 0) {
            store.isNextRound = true
        }
    }

    eventSource.onerror = function () {
        eventSource.close()
        console.log('error with sse')
    }
}

export { handleGame }
