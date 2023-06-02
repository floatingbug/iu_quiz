const lobbyStore = {
    lobbies: new Map(),

    addLobby,
}

function addLobby({lobbyId, gameName, players}){
    lobbies.set(lobbyId, {gameName, players});
}

module.exports = {lobyStore};
