const http = require('http');
const {createApi} = require('./lib/createApi');
const {InMemoryStore} = require('./lib/store/InMemoryStore');
const store = new InMemoryStore();
const api = createApi({store});
const httpServer = http.createServer(api);

httpServer.listen(8000);
