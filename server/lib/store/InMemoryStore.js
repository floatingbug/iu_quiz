function InMemoryStore(){
    this.users = [];
}

InMemoryStore.prototype = {
    constructor: InMemoryStore,
    
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

module.exports = {InMemoryStore};
