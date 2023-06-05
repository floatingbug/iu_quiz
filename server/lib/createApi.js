const express = require('express');
const api = express();
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const {loginUser} = require('./routes/loginUser');
const {addUser} = require('./routes/addUser');
const {showUsers} = require('./routes/showUsers');
const {createLobby} = require('./routes/createLobby');
const {addPlayerToLobby} = require('./routes/addPlayerToLobby');
const {handleGame} = require('./routes/handleGame');

function createApi({store, lobbyStore}){
    
    api.use(cors({
        origin: "http://localhost:5173",
        credentials: true
    }))
    api.use(bodyParser.json())
    api.use(session({
        secret: "lskajdf93ew8j3928fj293fj239q8wfj",
        resave: false,
        saveUninitialize: false
    }))

    //commands (geben nichts zurück, außer status codes, daher post-methoden).
    //ändern immer den serverzustand.
    api.post('/login-user', loginUser({store})) 
    api.post('/add-user', addUser({store}))
    api.post('/create-lobby', createLobby({store, lobbyStore}))
    api.post('/add-player-to-lobby', addPlayerToLobby({store, lobbyStore}))

    //queries (geben immer etwas zurück, daher get-methoden).
    //ändern nie den serverzustand.
    api.get('/show-users', showUsers({store}))


    //server sent events
    api.get('/play-mode', handleGame({store, lobbyStore}))

    return api
}


module.exports = {createApi};
