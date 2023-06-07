function fetchGameData({store, lobbyStore}){
    //send lobby-data to client via sse
    return (req, res)=>{
       
        //get correct lobby.
        const lobbyId = req.query.id;
		const lobby = lobbyStore.lobbies.get(lobbyId);

        res.setHeader('content-type', 'text/event-stream')
        
        //continuous send lobby-data to client.
        const intervalId = setInterval(async()=>{
       		const lobbyStringifyed = await JSON.stringify(lobby);

            res.write("data:" + lobbyStringifyed + "\n\n")
        }, 1000)
    
        res.on('close', ()=>{
            console.log("client closed the connection")
            if(lobby){
                lobby.players = [];
            }
            clearInterval(intervalId)
            res.end()
        })
    }
}


module.exports = {fetchGameData};
