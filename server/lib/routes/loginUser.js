function loginUser({store}){
    return async (req, res)=>{
        const credentials = req.body;

        const result = await store.checkCredentials(credentials);
        if(result === 1){
            res.json({code: 1, msg: "username or password is incorrect"})
            return 1
        }
        
        req.session.user = credentials;
        res.json({code: 0, msg: "user logged in"})
    }
}


module.exports = {loginUser};
