function InMemoryStore(){
    this.users = [
        {email: "user1", password: "1"},
        {email: "user2", password: "2"},
        {email: "user3", password: "3"},
        {email: "admin", password: "a"},
    ];
}

InMemoryStore.prototype = {
    checkCredentials,

    addUser,

    checkIfEmailExists,
}

function checkCredentials({email, password}){
    const result = this.users.filter(u=>{
        if(u.email === email && u.password == password){
            console.log(u.email)
            console.log(u.password)
            return u
        }
    });

    console.log("-------------->", result)

    if(result.length === 1){
        return 0
    }
    return 1
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
