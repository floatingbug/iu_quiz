function gameLoop({lobbyStore}){
    for(const lobby of lobbyStore.lobbies.values()){
        console.log(lobby)
        if(lobby.isRunning){
            lobby.counter--;
            console.log(lobby.counter);
        }
    }
}


module.exports = {gameLoop};
