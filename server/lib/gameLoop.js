function gameLoop({lobbyStore}){
    for(const lobby of lobbyStore.lobbies.values()){
        if(lobby.isRunning){
            lobby.time--;
        }
    }
}


module.exports = {gameLoop};
