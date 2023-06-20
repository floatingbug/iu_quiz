function addUser({store}){
    return async (req, res)=>{
        //todo: check if needed credentials are in body. (ist erledigt)

        const credentials = req.body;
        console.log(credentials);

        if (!req.body || !req.body.email || !req.body.password) {
            res.json({ code: 1, msg: "email or password not in req.body" });
            return;
        }

        let result = store.checkIfEmailExists(credentials);
        if(result === 1){
            res.json({code: 1, msg: "email already exists"})
            return
        }
        
        result = store.addUser(credentials);
        console.log(result)

        //todo: handle error.

        if(result === 0){
            res.json({code: 0, msg: "user added"})
        }
    }
}


module.exports = {addUser};
