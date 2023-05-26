require('dotenv').config();
const http = require('http');
const {createApi} = require('./lib/createApi');
const {MongoStore} = require('./lib/store/MongoStore');
const store = new MongoStore(process.env.DB_URL);
store.initialize();

const api = createApi({store});
const httpServer = http.createServer(api);

httpServer.listen(8000);
