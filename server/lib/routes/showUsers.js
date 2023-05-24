function showUsers({store}){
    return async (req, res)=>{
        const result = await store.showUsers();
        res.json(result);
    }
}


module.exports = {showUsers};
