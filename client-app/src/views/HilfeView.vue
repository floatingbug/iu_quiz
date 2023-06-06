<script setup>
</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
        <p>-Um Fragen Einsenden zu können müssen Sie eingeloggt sein.</p> 
        <br>
        <h3>Startseite (HOME)</h3>
        <p>Auf der Startseite haben Sie die Möglichkeit, das Spiel zu starten, sich anzumelden oder zu registrieren, das Scoreboard anzusehen, zum Hilfe-Bereich zu wechseln oder Feedback zu hinterlassen.</p>
        <br>
        <h3>Lobby</h3>
        <p>Die Lobby ist der Ort, an dem Sie ein neues Spiel starten oder einem bestehenden Spiel beitreten können. Wählen Sie 'Create Lobby', um eine neue Lobby zu erstellen und Freunde einzuladen. Wählen Sie 'Join Lobby', um einem bereits bestehenden Spiel beizutreten.</p>
        <br>
        <h3>Spielmodi</h3>
        <p>Die App bietet drei verschiedene Spielmodi: Einzel, Kooperativ und Kollaborativ. Im Einzelmodus spielen Sie alleine und versuchen, so viele Punkte wie möglich zu sammeln. Im kooperativen Modus arbeiten Sie mit anderen Spielern zusammen, um gemeinsam eine hohe Punktzahl zu erreichen. Im kollaborativen Modus treten Teams gegeneinander an und versuchen, als Gruppe die meisten Punkte zu sammeln.</p>
        <br>
        <h3>Scoreboard</h3>
        <p>Im Scoreboard können Sie die aktuellsten Punktestände und Ranglisten einsehen. Sehen Sie, wer die meisten Punkte in den verschiedenen Spielmodi gesammelt hat und streben Sie an, diese zu überbieten!</p>
        <br>
        <h3>Hilfe</h3>
        <p>Auf der Hilfe-Seite finden Sie nützliche Informationen und Anleitungen zur Bedienung der App. Wenn Sie weitere Fragen haben, zögern Sie nicht, uns über die Feedback-Funktion zu kontaktieren.</p>
        <br>
        <h3>Login</h3>
        <p>Um sich einzuloggen, geben Sie bitte Ihren Benutzernamen und Ihr Passwort in die entsprechenden Felder ein. Wenn Sie noch keinen Account haben, können Sie sich kostenlos registrieren.</p>
        <br>
        <h3>Impressum</h3>
        <p>Im Impressum finden Sie rechtliche Informationen zur App und zum Entwickler.</p>
        <br>
        <h3>Feedback</h3>
        <p>Wir schätzen Ihr Feedback sehr. Nutzen Sie die Feedback-Seite, um uns Ihre Gedanken, Vorschläge oder Probleme mit der App mitzuteilen.</p>
        <br>
        <h3>Passwort vergessen</h3>
        <p>Haben Sie Ihr Passwort vergessen? Keine Sorge, es passiert den Besten von uns. Folgen Sie bitte den unten aufgeführten Schritten, um Ihr Passwort zurückzusetzen und wieder Zugang zu Ihrem Konto zu erhalten.</p>
    </div>
</template>


<style scoped>
.container{
    position: relative;
    display: block;
    text-align: center;
    justify-content: center;
    color:black;
}

p{
    font-weight: 700;
    font-size: larger;
}

img {
    min-width: 180px;
    max-width: 20vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}

@media screen and (max-width: 768px) {
    .container {
        text-align: center;
        padding-bottom: 20%;
    }

}
</style>