const lobbyStore = {
    lobbies: new Map(),

    addLobby,

    findLobby,
}

function addLobby({lobbyId, gameMode, groupName, players, theme, time, numberQuestions}){
    this.lobbies.set(lobbyId, {
        lobbyId, 
        groupName, 
        players, 
        gameMode, 
        isRunning: false,
        theme,
        time,
        numberQuestions,
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
