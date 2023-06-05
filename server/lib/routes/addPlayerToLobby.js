function addPlayerToLobby({store, lobbyStore}){
    return (req, res)=>{
        const playerName = req.body.playerName;
        const lobbyId = req.body.lobbyId;
        
        //find lobby and add player to it
        const lobby = lobbyStore.findLobby({playerName, lobbyId});
        
        
        if(lobby === 1){
            res.json({code: 1, msg: "can't find lobby on server"})
            return 1
        }


        res.json({code: 0, msg: "lobby found", data: lobby})
    }
}


module.exports = {addPlayerToLobby};
