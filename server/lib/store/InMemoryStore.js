function InMemoryStore(){
    this.users = [
        {email: "user1", password: "1"},
        {email: "user2", password: "2"},
        {email: "user3", password: "3"},
    ];
}

InMemoryStore.prototype = {
    checkCredentials,

    addUser,

    checkIfEmailExists,
}

function checkCredentials({email, password}){
    for(let i = 0; i < this.users.length; i++){
        if(!(this.users[i].email === email && this.users[i].password === password)){
            return 1
        }
        return 0
    }
}


function addUser({email, password}){
    this.users.push({
        email,
        password
    });

    return 0
}

function checkIfEmailExists({email}){
    const result = this.users.filter(user => user.email === email);

    if(!result){
        return 1
    }
    return 0
}


module.exports = {InMemoryStore};
