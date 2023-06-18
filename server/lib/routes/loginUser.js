function loginUser({store}){
    return async (req, res)=>{

        //todo: check if username and password are in req.body.
        const credentials = req.body;
        console.log(credentials);

        if (!req.body || !req.body.username || !req.body.password) {
            res.json({ code: 1, msg: "username or password not in req.body" });
            console.log("test");
            return;
        }

        const result = await store.loginUser(credentials);
        if(result === 1){
            res.json({code: 1, msg: "email or password is incorrect"})
            return 1
        }

        req.session.user = credentials;
        res.json({code: 0, msg: "login success"})
    }
}


module.exports = {loginUser};
