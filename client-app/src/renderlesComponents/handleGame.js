import {store} from './store.js';
const API_URL_LOCAL = "http://localhost:8000";
const API_URL_Server = 'http://212.71.252.220:8000';
const API_URL = API_URL_LOCAL;

const handleGame = {
	startFetchGamedata,


}

function startFetchGamedata(){
	const eventSource = new EventSource(`${API_URL}/play-mode?id=${store.lobby.lobbyId}`);

	eventSource.onmessage = function(event){
		try{
			if(!event.data){
				return
			}
			store.lobby = JSON.parse(event.data)
		}
		catch(error){
			console.log(error)
		}
		console.log(store.lobby)
	};

	eventSource.onerror = function(){
		console.log("error with sse")
	}
}

export {handleGame}
