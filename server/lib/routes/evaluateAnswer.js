function evaluateAnswer({store, lobbyStore}){
    return (req, res)=>{  
        const playerName = req.body.playerName;
        const lobbyId = req.body.lobbyId;
        const questionId = req.body.questionId;
        //selectedAnswer existiert bisher nicht !!!
        const selectedAnswer = req.body.selectedAnswer;

        //todo umgesetzt, kontrolle ausstehend
        //ursprünglich todo: check if all needed propperties are in payload.
        if(!playerName || !lobbyId || !questionId || !selectedAnswer){
            res.json({code: 1, msg: "some Propperties are missing"})
            return
        }
        
       
        //todo: evaluate if answer is true or false.
        //Ich habe mich hier mal dran Versucht, glaube aber leider das ich hier gedanklich einen Fehler habe. Außerdem ist der Zugriff auf rightAnswer falsch,
        //hier müsste ja eigentlich noch das theme Array durchlaufen werden und die questionId abgeglichen werden. Da ich aber glaube das die funktion grundsätzlich
        //anders umgestezt werden müsste, habe ich hier nicht weiter gemacht. Ihr düft mir hier gerne helfen oder den todo selbst übernehmen. (Daniel)
        if(selectedAnswer == lobbyStore.rightAnswer){
            res.json({code: 0, msg: "right Answer"})
            return
        } else {
            res.json({code: 0, msg: "wrong Answer"})
            return
        }
    }
}


module.exports = {evaluateAnswer};
