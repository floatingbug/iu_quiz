<script setup>
</script>


<template>
    <div class="container">
        <div class="choose-question">
            <p>Bestehende Frage zum bearbeiten auswählen:</p>
            <label for="theme">Themenbereich:</label>
            <select id="theme" name="theme">
                <option value="0">Informationstechnik</option>
                <option value="1">Naturwissenschaft</option>
                <option value="2">Geschichte</option>
            </select>
            <label for="theme">Frage:</label>
            <select id="theme" name="theme">
                <option value="0">Frage 1: Wo werde die Daten eines Computers gespeichert?</option>
                <option value="1">Frage 2: Ein Lücke zwischen zwei Wörtern machst du mit ...</option>
                <option value="2">Frage 3: Ein anderes Wort für den Computer Bildschirm lautet ...</option>
                <option value="3">Frage 4: Welche dieser HTML-Arten gibt es nicht?</option>
                <option value="4">Frage 5: Was ist ein Modem?</option>
                <option value="5">Frage 6: Welches Systemprogramm eines PC ist direkt nach dem Einschalten bereit?</option>
                <option value="6">Frage 7: 1 GigaByte sind wieviel MegaBytes?</option>
                <option value="7">Frage 8: Welches dieser Begriffe ist ein Internet-Browser?</option>
                <option value="8">Frage 9: Wofür ist CD die Abkürzung?</option>
                <option value="9">Frage 10: Wofür steht png?</option>
            </select>
            <button>Auswählen & bearbeiten</button>
        </div>
        
        <div class="config-question">
            <p>Frage speichern:</p>
            <label for="themeinput">Themenbereich:</label>
            <input id=themeinput type="text">
            <label for="question">Frage:</label>
            <input id="question" type="text">
            <label for="answer1">1. Antwort:</label>
            <input id=answer2 type="text">
            <label for="answer2">2. Antwort:</label>
            <input id=answer2 type="text">
            <label for="answer3">3. Antwort:</label>
            <input id=answer3 type="text">
            <label for="answer4">4. Antwort:</label>
            <input id=answer4 type="text">
            <label for="rightAnswer">Richtige Antwort:</label>
            <select id="rightAnswer" name="theme">
                <option value="0">1. Antwort</option>
                <option value="0">2. Antwort</option>
                <option value="0">3. Antwort</option>
                <option value="0">4. Antwort</option>
            </select>
            <button>Frage speichern</button>
        </div>
    </div>
</template>


<style scoped>
.container {
    height: auto;
    display:flex;
    justify-content: center;
    gap: 5%;
    margin-top: 2%;
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
}

.choose-question {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0%;
    margin-left:10%;
   }

.choose-question textarea {
    flex:80%;
}

.choose-question select {
    flex: 10%;
}
.choose-question label {
    font-size: large;
}

.choose-question button {
    flex: 10%;
    width: 40%;
    height: 100%;
    margin-left: auto;
    margin-top: 2%;
}

.choose-question p {
font-size: x-large;
font-weight: 700;
}

.config-question {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0%;
    margin-right: 10%;
}

.config-question input {
    height: 100%;
    min-width: 200px;
}

.config-question button {
    width: 20%;
    height: 100%;
    margin-left: auto;
    margin-top: 2%;
}
.config-question select {
    flex: 10%;
    height: 100%
}
.config-question label {
    font-size: large;
}

.config-question p {
font-size: x-large;
font-weight: 700;
}



@media(max-width: 976px){
    .container {
        flex-direction: column;
        align-items: center;
    }
    .config-question {
        width: 80%;
        margin-right: 0%;
    }

    .config-question button {
        margin-bottom: 30%;
    }
    .choose-question {
        width: 80%;
        margin-left: 0%;
    }

}

</style>
