function createLobby({store, lobbyStore}){    
    return async (req, res)=>{
        const lobby = req.body;
        

        if(!lobby || !lobby.groupName || !lobby.lobbyId || !lobby.players || !lobby.gameMode){
            console.log("some options are missed")
            console.log(lobby)
            res.json({code: 1, msg: "some options are missed"})
            return
        }
         if(!lobby.time){
            console.log("time is missing")
            res.json({code: 1, msg: "time is missing"})
            return
         }
         if(lobby.theme !== 0 && lobby.theme !== 1 && lobby.theme !== 2){
            console.log("theme is missing")
            res.json({code: 1, msg: "theme is missing"})
            return
           }
          if(!lobby.numberQuestions){
            console.log("numberQuesetions is missing")
            res.json({code: 1, msg: "numberQuesetions is missing"})
            return
          }
          if(lobby.time !== 30 && lobby.time !== 45 && lobby.time !== 60){
            console.log("time is not 30 or 45 or 60")
            res.json({code: 1, msg: "time is not 30 or 45 or 60"})
            return
          }
          if(lobby.players == ""){
            console.log("name is missing")
            res.json({code: 1, msg: "name is missing"})
            return
          }
        
         
       
        const result = lobbyStore.addLobby(lobby);
        console.log("-------------------")
        console.log("lobby created: ")
        console.log(result)
        console.log("-------------------")
        res.json({code: 0, msg: "lobby added to server", data: result})
    }
}


module.exports = {createLobby};
