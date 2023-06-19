import {store} from './store.js';
const API_URL_LOCAL = "http://localhost:8000";
const API_URL_Server = 'http://212.71.252.220:8000';
const API_URL = API_URL_LOCAL;

const handleGame = {
	startFetchGamedata,
}

function startFetchGamedata(){
	const eventSource = new EventSource(`${API_URL}/fetch-game-data?id=${store.lobby.lobbyId}`);
    let lobby;

	eventSource.onmessage = async function(event){
        
        //if payload is empty close execution.
        if(!event.data){
            return
        }

        //try to parse json-string in json-object.
        try{
            lobby = await JSON.parse(event.data);
        }
        catch{
            console.log("fail to parse json")
            eventSource.close()
            return
        }

        
        //close ssh-connection if server can't find lobby.
        if(lobby.data === "quiz-canceled"){
            console.log("quiz canceled")
            store.quizIsCanceled = true;
            eventSource.close()
            return
        }
        
        //save lobby to store.lobby.
        store.lobby = lobby;
        
        //if every user answerd the current question, set store.isNextRound to true.
        if((store.lobby.evaluatedAnswers % store.lobby.players.length) === 0){
            store.isNextRound = true;
        }

        console.log("---------------->", store.lobby.isRunning)

    };

	eventSource.onerror = function(){
        eventSource.close()
		console.log("error with sse")
	}
}


export {handleGame}
