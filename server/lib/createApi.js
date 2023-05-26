const express = require('express');
const api = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const {loginUser} = require('./routes/loginUser');
const {addUser} = require('./routes/addUser');
const {showUsers} = require('./routes/showUsers');

function createApi({store}){
    
    api.use(bodyParser.json())
    api.use(session({
        secret: "lskajdf93ew8j3928fj293fj239q8wfj",
        resave: false,
        saveUninitialize: false
    }))

    //commands (geben nichts zurück, außer status codes, daher post-methoden).
    api.post('/login-user', loginUser({store})) 
    api.post('/add-user', addUser({store}))

    //queries (geben immer etwas zurück, daher get-methoden).
    api.get('/show-users', showUsers({store}))

    return api
}


module.exports = {createApi};
