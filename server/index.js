require('dotenv').config();
const http = require('http');
const {createApi} = require('./lib/createApi');
const {MongoStore} = require('./lib/store/MongoStore');
//const store = new MongoStore(process.env.DB_URL);
//store.initialize();
<<<<<<< HEAD
=======
const store = {};
>>>>>>> f2abdad3106bcda66d2e6b8d04f45ab8f906e930
const {lobbyStore} = require('./lib/store/lobbyStore');
const {gameLoop} = require('./lib/gameLoop');
const store = {};

setInterval(()=>{
    gameLoop({lobbyStore})
}, 1000)

const api = createApi({store, lobbyStore});
const httpServer = http.createServer(api);

httpServer.listen(8000);
