function addUser({store}){
    return async (req, res)=>{
        //todo: check if needed credentials are in body.
        
       
        const credentials = req.body;

        let result = store.checkIfEmailExists(credentials);

        if(result === 1){
            res.json({code: 1, msg: "email allready exists"})
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
