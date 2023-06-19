function createLobby({store, lobbyStore}){
    return async (req, res)=>{
        const lobby = req.body;


        if(!lobby || !lobby.groupName || !lobby.lobbyId || !lobby.players || !lobby.gameMode){
            res.json({code: 1, msg: "some options are missed"})
            return
        }
         if(!lobby.time){
             res.json({code: 1, msg: "time is missing"})
             return
         }
         // if(typeof lobby.theme !== Number){
         //     res.json({code: 1, msg: "theme is missing"})
         //     return
         // }
         // if(!lobby.numberQuestions){
         //     res.json({code: 1, msg: "numberQuesetions is missing"})
         //     return
         // }
         // if(lobby.time !== 35 && lobby.time !== 45 && lobby.time !== 60){
         //     res.json({ code: 1, msg: "time is not 30, 45 or 60"})
         //     return
         // }
       
        const result = lobbyStore.addLobby(lobby);
        console.log("-------------------")
        console.log("lobby created: ")
        console.log(result)
        console.log("-------------------")
        res.json({code: 0, msg: "lobby added to server", data: result})
    }
}


module.exports = {createLobby};
