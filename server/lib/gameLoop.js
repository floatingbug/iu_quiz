function gameLoop({lobbyStore}){
    for(const lobby of lobbyStore.lobbies.values()){
        const numberOfAvailableQuestions = Object.keys(lobbyStore.themes[lobby.theme]).length;

        if(lobby.isRunning){
            lobby.time--;
        }
        
        //if no more questions left, add lobby key to lobbyStore.keysToRemoveLobby.
        if(lobby.roundCounter + 1 === lobby.numberQuestions || numberOfAvailableQuestions === lobby.roundCounter + 1){
            lobby.gameIsOver = true;
            lobbyStore.keysToRemoveLobby.push(lobby.lobbyId);
            continue
        }

        //handle userinput.
        if(lobby.isChange && !lobby.gameIsOver){
            //load next questions into lobby.answers.
            let key = getKeyForQuestion(lobby.iteration);
            lobby.answers = lobbyStore.themes[lobby.theme][key].answers;
            
            //if lobby.evaluatedAnswers and count of lobby.players is equal, increment lobby.iteration and
            //load next question and answers.
            if(lobby.evaluatedAnswers === lobby.players.length){
                lobby.roundCounter++;
                const key = getKeyForQuestion(lobby.roundCounter);
                lobby.answers = lobbyStore.themes[lobby.theme][key].answers;
                lobby.question = lobbyStore.themes[lobby.theme][key].question;
                lobby.iteration++;
                lobby.evaluatedAnswers = 0;
            }
        
            console.log("lobby has changed: ", lobby)
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
    }

    return key;
}


module.exports = {gameLoop};
