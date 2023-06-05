require('dotenv').config();
const http = require('http');
const {createApi} = require('./lib/createApi');
const {MongoStore} = require('./lib/store/MongoStore');
const store = new MongoStore(process.env.DB_URL);
store.initialize();
const {lobbyStore} = require('./lib/store/lobbyStore');

const api = createApi({store, lobbyStore});
const httpServer = http.createServer(api);

httpServer.listen(8000);
