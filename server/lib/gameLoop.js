function gameLoop({lobbyStore}){
    for(const lobby of lobbyStore.lobbies.values()){
        const numberOfAvailableQuestions = Object.keys(lobbyStore.themes[lobby.theme]).length;

        if(lobby.isRunning){
            lobby.time--;
        }
        
        /******************handle if every questions made*************************/
        //if no more questions left, add lobby key to lobbyStore.keysToRemoveLobby.
        // if(lobby.iteration === lobby.numberQuestions || numberOfAvailableQuestions === lobby.iteration){
        //     lobbyStore.keysToRemoveLobby.push(lobby.lobbyId);
        //     break
        // }

        /*********************handle kooperative mode****************************/
        if(lobby.gameMode === 'koop'){
            if(lobby.isChange && !lobby.gameIsOver || lobby.time <= 0){
                lobby.iteration++;
                const key = getKeyForQuestion(lobby.iteration);
                lobby.answers = lobbyStore.themes[lobby.theme][key].answers;
                lobby.question = lobbyStore.themes[lobby.theme][key].question;
                

                //set time
                lobby.time = lobby.roundTime;
                lobby.isChange = false;
            }
        }

        /****************handle userinput.************************/
        //if isChange is true, update lobby-state.
        if(lobby.gameMode === "kollab" && (lobby.isChange && !lobby.gameIsOver) || lobby.time <= 0){
            
            //if lobby.evaluatedAnswers and count of lobby.players is equal, increment lobby.iteration and
            //load next question and answers.
            if(((lobby.evaluatedAnswers % lobby.players.length) === 0) || lobby.time <= 0){
                lobby.iteration++;
                
                //get key for next question.
                const key = getKeyForQuestion(lobby.iteration);
                console.log("key for next question:", key)

                //set next answers and questions.
                lobby.answers = lobbyStore.themes[lobby.theme][key].answers;
                lobby.question = lobbyStore.themes[lobby.theme][key].question;


                //set time
                lobby.time = lobby.roundTime;
            }
        
            lobby.isChange = false;
        }
    }        
}

function getKeyForQuestion(index){
    let key = 'q0';
    
    switch(index){
        case 0:
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

    return key;
}


module.exports = {gameLoop};
