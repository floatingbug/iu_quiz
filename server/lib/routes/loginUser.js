function loginUser({store}){
    return async (req, res)=>{

        //todo: check if username and password are in req.body.
        const credentials = req.body;

        const result = await store.checkCredentials(credentials);
        if(result === 1){
            res.json({code: 1, msg: "email or password is incorrect"})
            return 1
        }

        req.session.user = credentials;
        res.json({code: 0, msg: "login success"})
    }
}


module.exports = {loginUser};
