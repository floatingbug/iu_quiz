const lobbyStore = {
    lobbies: new Map(),

    addLobby,

    findLobby,
}

<<<<<<< HEAD
function addLobby({lobbyId, gameMode, groupName, players, theme, time, numberQuestions}){
=======
function addLobby({lobbyId, gameMode, groupName, players,counter}){
>>>>>>> 63d99c7bb691bb541b77ba4096c159cfc34a752b
    this.lobbies.set(lobbyId, {
        lobbyId, 
        groupName, 
        players, 
        gameMode, 
        isRunning: false,
<<<<<<< HEAD
        theme,
        time,
        numberQuestions,
=======
        counter,
>>>>>>> 63d99c7bb691bb541b77ba4096c159cfc34a752b
    });
    return this.lobbies.get(lobbyId)
}

function findLobby({lobbyId, playerName}){
    const lobby = this.lobbies.get(lobbyId);

    if(!lobby){
        return 1
    }

    lobby.players.push(playerName)
    return lobby
}


module.exports = {lobbyStore};
