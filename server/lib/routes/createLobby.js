function createLobby({store, lobbyStore}){
    return async (req, res)=>{
        const lobby = req.body;

        //todo: check also if the follow popperties are awailable: time, theme, numberQuestions.
        if(!lobby || !lobby.groupName || !lobby.lobbyId || !lobby.players || !lobby.gameMode){
            res.json({code: 1, msg: "some options are missed"})
            return
        }

        //todo: check if time is 30, 50, or 60 secs.

        
        const result = lobbyStore.addLobby(lobby);
        console.log("-------------------")
        console.log(result)
        console.log("-------------------")
        res.json({code: 0, msg: "lobby added to server", data: result})
    }
}


module.exports = {createLobby};
