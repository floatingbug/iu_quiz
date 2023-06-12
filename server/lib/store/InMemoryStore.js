function InMemoryStore(){
    this.users = [
        {email: "user1", password: "1"},
        {email: "user2", password: "2"},
        {email: "user3", password: "3"},
    ];
}

InMemoryStore.prototype = {
    loginUser,
}

function loginUser({email, password}){
    for(let i = 0; i < this.users.length; i++){
        if(!(this.users[i].email === email && this.users[i].password === password)){
            return 1
        }
        return 0
    }
}


module.exports = {InMemoryStore};
