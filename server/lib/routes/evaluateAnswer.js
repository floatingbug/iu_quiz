function evaluateAnswer({store, lobbyStore}){
    return async (req, res)=>{  
        const playerName = req.body.playerName;
        const lobbyId = req.body.lobbyId;
        const questionIdClient = req.body.questionId;

        const lobby = lobbyStore.lobbies.get(lobbyId);

        if(!lobby){
            res.json({code: 1, msg: "lobby not found"})
            return
        }

        //get key of current question.
        const key = getKeyOfCurrentQuestion(lobby.iteration);

        //get number of question with right answer.
        const questionIdServer = lobbyStore.themes[lobby.theme][key].rightAnswer;

        console.log("questionIdClient: ", questionIdClient, "questionIdServer: ", questionIdServer)


        //evaluate if answer is true or false and save boolean to evaluatedAnswers.
        if(questionIdClient === questionIdServer){
            lobby.evaluatedAnswers++;
            lobby.userAnswers.get(playerName)[lobby.iteration] = true;

            //set isChange to true so lobby get updated in gameloop.
            lobby.isChange = true;
            
            //set gameIsOver
            if(lobby.numberQuestions === lobby.iteration+1){
                lobby.userAnswersArray.push(true);
                console.log(lobby.userAnswersArray)
                lobby.gameIsOver = true;
                res.json(lobby)

                return
            }
                console.log(lobby.userAnswersArray)

           
            res.json({code: 0, msg: "answer was right", data: {rightAnswer: true}});
            return
        }
        else{
            lobby.evaluatedAnswers++;
            lobby.userAnswers.get(playerName)[lobby.iteration] = false;
            
            lobby.isChange = true;

            //set gameIsOver
            if(lobby.numberQuestions === lobby.iteration+1){
                lobby.userAnswersArray.push(false);
                lobby.gameIsOver = true;
                res.json(lobby)

                return
            }

            res.json({code: 0, msg: "answer was wrong", data: {rightAnswer: false}});
            return
        }

    }
}

//get key of current question by index.
function getKeyOfCurrentQuestion(iteration){
    let key;
    
    switch(iteration){
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
        case 4:
            key = 'q4';
            break;
        case 5:
            key = 'q5';
            break;
        case 6:
            key = 'q6';
            break;
        case 7:
            key = 'q7';
            break;
        case 8:
            key = 'q8';
            break;
        case 9:
            key = 'q9';
            break;
        case 10:
            key = 'q10';
            break;
        case 11:
            key = 'q11';
            break;
        case 12:
            key = 'q12';
            break;
        case 13:
            key = 'q13';
            break;
        case 14:
            key = 'q14';
            break;
        case 15:
            key = 'q15';
            break;
        case 16:
            key = 'q16';
            break;
        case 17:
            key = 'q17';
            break;
        case 18:
            key = 'q18';
            break;
        case 19:
            key = 'q19';
            break;
    }
    return key
}

module.exports = {evaluateAnswer};
