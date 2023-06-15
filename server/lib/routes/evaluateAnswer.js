function evaluateAnswer({store, lobbyStore}){
    return (req, res)=>{
        //todo: check if all needed propperties are in payload.

        const playerName = req.body.playerName;
        const lobbyId = req.body.lobbyId;
        const questionIdClient = req.body.questionId;

        const lobby = lobbyStore.lobbies.get(lobbyId);

        //if every user has allready answerd every question, cancel evaluation.
        if(lobby.gameIsOver){
            res.json({code: 0, msg: "all questions allready answerd", data: {noMoreQuestions: true}})
            return
        }

        //get index of current question.
        let key;
        switch(lobby.iteration){
            case 0:
                key = 'q0';
                break;
            case 1:
                key = 'q1';
                break;
            case 2:
                key = 'q2';
                break;
            case 3:
                key = 'q3';
                break;
        }

        //get number of question with right answer.
        const questionIdServer = lobbyStore.themes[lobby.theme][key].rightAnswer;

        //evaluate if answer is true or false and save boolean to evaluatedAnswers.
        if(questionIdClient === questionIdServer){
            lobby.evaluatedAnswers++;
            lobby.userAnswers.get(playerName)[lobby.iteration] = true;

            //set isChange to true so lobby get updated in gameloop.
            lobby.isChange = true;

            res.json({code: 0, msg: "answer was right", data: {rightAnswer: true}});
            console.log(lobby)
            return
        }
        else{
            lobby.evaluatedAnswers++;
            lobby.userAnswers.get(playerName)[lobby.iteration] = false;
            
            lobby.isChange = true;

            res.json({code: 0, msg: "answer was wrong", data: {rightAnswer: false}});
            console.log(lobby)
            return
        }

    }
}


module.exports = {evaluateAnswer};
