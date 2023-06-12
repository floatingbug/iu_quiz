<script setup>
</script>



<template>
    <div class="container">
        <table id="hilfestellung">
            <tr>
                <th class="titel">Fragen einsenden</th>
                <th>Um Fragen Einsenden zu können müssen Sie eingeloggt sein</th>
            </tr>
            <tr>
                <th class="titel">Startseite (HOME)</th>
                <th>Auf der Startseite haben Sie die Möglichkeit, das Spiel zu starten, sich anzumelden oder zu registrieren, das Scoreboard anzusehen, zum Hilfe-Bereich zu wechseln oder Feedback zu hinterlassen.</th>
            </tr>
            <tr>
                <th class="titel">Lobby</th>
                <th>Die Lobby ist der Ort, an dem Sie ein neues Spiel starten oder einem bestehenden Spiel beitreten können. Wählen Sie 'Create Lobby', um eine neue Lobby zu erstellen und Freunde einzuladen. Wählen Sie 'Join Lobby', um einem bereits bestehenden Spiel beizutreten.</th>
            </tr>
            <tr>
                <th class="titel">Spielmodi</th>
                <th>Die App bietet drei verschiedene Spielmodi: Einzel, Kooperativ und Kollaborativ. Im Einzelmodus spielen Sie alleine und versuchen, so viele Punkte wie möglich zu sammeln. Im kooperativen Modus arbeiten Sie mit anderen Spielern zusammen, um gemeinsam eine hohe Punktzahl zu erreichen. Im kollaborativen Modus treten Teams gegeneinander an und versuchen, als Gruppe die meisten Punkte zu sammeln.</th>
            </tr>
            <tr>
                <th class="titel">Scoreboard</th>
                <th>Im Scoreboard können Sie die aktuellsten Punktestände und Ranglisten einsehen. Sehen Sie, wer die meisten Punkte in den verschiedenen Spielmodi gesammelt hat und streben Sie an, diese zu überbieten!</th>
            </tr>
            <tr>
                <th class="titel">Hilfe</th>
                <th>Auf der Hilfe-Seite finden Sie nützliche Informationen und Anleitungen zur Bedienung der App. Wenn Sie weitere Fragen haben, zögern Sie nicht, uns über die Feedback-Funktion zu kontaktieren.</th>
            </tr>
            <tr>
                <th class="titel">Login</th>
                <th>Um sich einzuloggen, geben Sie bitte Ihren Benutzernamen und Ihr Passwort in die entsprechenden Felder ein. Wenn Sie noch keinen Account haben, können Sie sich kostenlos registrieren.</th>
            </tr>
            <tr>
                <th class="titel">Impressum</th>
                <th>Im Impressum finden Sie rechtliche Informationen zur App und zum Entwickler.</th>
            </tr>
            <tr>
                <th class="titel">Feedback</th>
                <th>Wir schätzen Ihr Feedback sehr. Nutzen Sie die Feedback-Seite, um uns Ihre Gedanken, Vorschläge oder Probleme mit der App mitzuteilen.</th>
            </tr>
            <tr>
                <th class="titel">Passwort vergessen</th>
                <th>Haben Sie Ihr Passwort vergessen? Keine Sorge, es passiert den Besten von uns. Folgen Sie bitte den unten aufgeführten Schritten, um Ihr Passwort zurückzusetzen und wieder Zugang zu Ihrem Konto zu erhalten.</th>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.container {
    padding-bottom: 10%;
    padding-top: 5%;
}

#hilfestellung {
    margin-left: auto;
    margin-right: auto;
}

table {
    min-width: 200px;
    width: 50%;
    background-image: linear-gradient(180deg,  #00a7b5 0%, rgba(172, 168, 168, 0.74) 100%);
    border: 3px solid black;
}

th, td {
    border: 3px solid black;
    color: black;
    font-weight: 700;
    padding: 8px;
}

@media (max-width: 945px) {

    table {
        width: 80%;
    }

    .titel {
        margin-top: 5%;
        border-bottom: none;
    }

    table th, table td {
        display: block;
    }
    
    table tr {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 365px) {

.container{
    padding-bottom: 40%;
}

}

</style>