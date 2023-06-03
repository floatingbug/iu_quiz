function createLobby({store, lobbyStore}){
    return async (req, res)=>{
        const lobby = req.body;

        if(!lobby || !lobby.groupName || !lobby.lobbyId || !lobby.players){
            res.json({code: 1, msg: "some options are missed"})
            return
        }
        
        lobbyStore.addLobby(lobby);
        res.json({code: 0, msg: "lobby added to server"})
    }
}


module.exports = {createLobby};
