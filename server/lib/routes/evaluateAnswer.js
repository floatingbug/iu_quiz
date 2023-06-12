function evaluateAnswer({store, lobbyStore}){
    return (req, res)=>{
        //todo: check if all needed propperties are in payload.

        const playerName = req.body.playerName;
        const lobbyId = req.body.lobbyId;
        const questionId = req.body.questionId;

        //evaluate if answer is true or false.
        
    }
}


module.exports = {evaluateAnswer};
