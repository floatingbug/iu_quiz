function addUser({store}){
    return async (req, res)=>{
        const credentials = req.body;
        store.addUser(credentials);
        res.json({code: 0, msg: "user added"})
    }
}


module.exports = {addUser};
