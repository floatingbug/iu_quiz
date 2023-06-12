const {InMemoryStore} = require('./lib/store/InMemoryStore');
const store = new InMemoryStore();
const http = require('http');
const {createApi} = require('./lib/createApi');
const {lobbyStore} = require('./lib/store/lobbyStore');
const {gameLoop} = require('./lib/gameLoop');

setInterval(()=>{
    gameLoop({lobbyStore})
}, 1000)

const api = createApi({store, lobbyStore});
const httpServer = http.createServer(api);

httpServer.listen(8000);
