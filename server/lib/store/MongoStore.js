const {MongoClient} = require('mongodb');

function MongoStore(DB_URL){
    this.DB_URL = DB_URL;
    this.client = {};
    this.db = {};
}

MongoStore.prototype = {
    constructor: MongoStore,

    initialize,
    
    addUser,

    showUsers,

    checkCredentials,
}

async function addUser({email, password}){
    this.users.push({username, password});
    return 0
}

async function showUsers(){
    return this.users
}

async function checkCredentials({email, password}){
    let result;
    
    try{
        const collection = this.db.collection('users');
        const query = {
            email,
            password
        };

       result = await collection.findOne(query);
    }
    catch(error){
        console.log(error)
        return 2
    }

    if(result){
        return 0
    }
    else{
        return 1
    }
}

async function initialize(){
    try{
        this.client = await new MongoClient(this.DB_URL);
        this.db = this.client.db('iu_quiz');
    }
    catch(error){
        console.log(error)
        return 1
    }

    console.log("connected to db")
}


module.exports = {MongoStore};
