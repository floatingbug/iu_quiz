function loginUser({store}){
    return async (req, res)=>{
        const credentials = req.body;

        const result = await store.checkCredentials(credentials);
        if(result === 1){
            res.json({code: 1, msg: "email or password is incorrect"})
            return 1
        }
       
        if(result === 2){
            res.json({code: 1, msg: "intern server error"})
            return 1
        }

        req.session.user = credentials;
        res.json({code: 0, msg: "login success"})
    }
}


module.exports = {loginUser};
