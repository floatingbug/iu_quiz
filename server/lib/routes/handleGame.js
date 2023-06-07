function handleGame({store, lobbyStore}){
    return (req, res)=>{
        const lobbyId = req.query.id;
        console.log("client connected")
        res.setHeader('content-type', 'text/event-stream')

        const intervalId = setInterval(()=>{
        
			const lobby = lobbyStore.lobbies.get(lobbyId);
       		const lobbyStringifyed = JSON.stringify(lobby);
        
            console.log(lobby)
            console.log(req.query)
            res.write("data: " + lobbyStringifyed + "\n\n")
        }, 1000)
    
        res.on('close', ()=>{
            console.log("client closed the connection")
            clearInterval(intervalId)
            res.end()
        })
    }
}


module.exports = {handleGame};
