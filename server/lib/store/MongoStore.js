const {MongoClient} = require('mongodb');

function MongoStore(DB_URL){
    this.DB_URL = DB_URL;
    this.client = {};
}

MongoStore.prototype = {
    constructor: MongoStore,

    initialize: async function(){
        try{
            this.client = await new MongoClient(this.DB_URL);
        }
        catch(error){
            console.log(error)
            return 1
        }

        console.log("connected to db")
    },
    
    addUser,

    showUsers,

    checkCredentials,
}

async function addUser({username, password}){
    this.users.push({username, password});
    return 0
}

async function showUsers(){
    return this.users
}

async function checkCredentials({username, password}){
    return 0
}

module.exports = {MongoStore};
