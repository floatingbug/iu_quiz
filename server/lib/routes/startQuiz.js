function startQuiz({store, lobbyStore}){
    return (req, res)=>{
        if(!req.body || !req.body.quizId){
            res.json({code: 1, msg: "quiz id is needet as {quizId: <number>}"})
            return
        }

        const lobby = lobbyStore.lobbies.get(req.body.quizId);
        if(!lobby){
            res.json({code: 1, msg: "quiz with that id does not exist"})
            return
        }

        lobby.isRunning = true;
    }
}


module.exports = {startQuiz};
