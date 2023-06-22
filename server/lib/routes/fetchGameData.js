function fetchGameData({store, lobbyStore}){
    //send lobby-data to client via sse
    return async (req, res)=>{
        const errorMsg = await JSON.stringify({code: 1, msg: "quiz canceled", data: "quiz-canceled"});
       
        //get correct lobby.
        const lobbyId = req.query.id;
		const lobby = await lobbyStore.lobbies.get(lobbyId);

        res.setHeader('content-type', 'text/event-stream')
        
        //continuous send lobby-data to client.
        const intervalId = setInterval(async()=>{
            let lobbyStringifyed
            
            if(!lobby){
                console.log("-------------------------------------->", lobby)
                return
            }

            //map to array
            lobby.userAnswersArray = Array.from(lobby.userAnswers);

            try{
       	        lobbyStringifyed = await JSON.stringify(lobby);
            }
            catch(err){
                console.log("error in fetchGameData.js: ", err)
                res.end("data:" + errorMsg + "\n\n")
                clearInterval(intervalId)
            }

            res.write("data:" + lobbyStringifyed + "\n\n")

            if(lobby.gameIsOver){
                console.log("----------------------------->", lobby.lobbyId)
            }
        }, 500)
    
        res.on('close', ()=>{
            console.log("client closed the connection")
            if(lobby){
                lobbyStore.lobbies.delete(lobby.lobbyId)
            }
            clearInterval(intervalId)
            res.end()
        })
    }
}


module.exports = {fetchGameData};
