//every object in the array themes is one theme.
const themes = [
    //
    //
    //Thema: 1
    {
        q0: {
            question: "Wo werde die Daten eines Computers gespeichert?",
            answers: [ 
                {answer1: "Auf der Festplatte", id: 1},
                {answer2: "In der Tastatur", id: 2},
                {answer3: "In der Hauptsteuerug", id: 3},
                {answer4: "Auf der Maus", id: 4},
            ],
            rightAnswer: 1
        },
        q1: {
            question: "Ein Lücke zwischen zwei Wörtern machst du mit ...",
            answers: [ 
                {answer1: "Der Lehrertaste", id: 1},
                {answer2: "Der Leertaste", id: 2},
                {answer3: "Der Lückentaste", id: 3},
                {answer4: "Der Steuerungstaste", id: 4},
            ],
            rightAnswer: 2
        },
        q2: {
            question: "Ein anderes Wort für den Computer Bildschirm lautet ...",
            answers: [ 
                {answer1: "Scheibe", id: 1},
                {answer2: "Windows", id: 2},
                {answer3: "Scheibe", id: 3},
                {answer4: "Monitor", id: 4},
            ],
            rightAnswer: 4
        },
        q3: {
            question: "Welche dieser HTML-Arten gibt es nicht?",
            answers: [ 
                {answer1: "DHTML", id: 1},
                {answer2: "SHTML", id: 2},
                {answer3: "XHTML", id: 3},
                {answer4: "NHTML", id: 4},
            ],
            rightAnswer: 4
        },
        q4: {
            question: "Was ist ein Modem?",
            answers: [
                { answer1: "Ein Datenwandler", id: 1 },
                { answer2: "Ein Umspanner", id: 2 },
                { answer3: "Ein Gleichrichter", id: 3 },
                { answer4: "Ein Temperaturregler", id: 4 },
            ],
            rightAnswer: 1
        },
        q5: {
            question: "Welches Systemprogramm eines PC ist direkt nach dem Einschalten bereit?",
            answers: [
                { answer1: "HTML", id: 1 },
                { answer2: "LISP", id: 2 },
                { answer3: "UMTS", id: 3 },
                { answer4: "BIOS", id: 4 },
            ],
            rightAnswer: 4
        },
        q6: {
            question: "1 GigaByte sind wieviel MegaBytes?",
            answers: [
                { answer1: "10 MB", id: 1 },
                { answer2: "1024 MB", id: 2 },
                { answer3: "124 MB", id: 3 },
                { answer4: "10240MB", id: 4 },
            ],
            rightAnswer: 2
        },
        q7: {
            question: "Welches dieser Begriffe ist ein Internet-Browser?",
            answers: [
                { answer1: "Windows", id: 1 },
                { answer2: "Unix", id: 2 },
                { answer3: "Netscape Navigator", id: 3 },
                { answer4: "OS/2", id: 4 },
            ],
            rightAnswer: 3
        },
        q8: {
            question: "Wofür ist CD die Abkürzung?",
            answers: [
                { answer1: "Clear Data", id: 1 },
                { answer2: "Computer Disc", id: 2 },
                { answer3: "Compact Disc", id: 3 },
                { answer4: "Compact Data", id: 4 },
            ],
            rightAnswer: 3
        },
        q9: {
            question: "Wofür steht png?",
            answers: [
                { answer1: "Peter Normenstein Garantie", id: 1 },
                { answer2: "Portable Network Graphics", id: 2 },
                { answer3: "Private Netscape Graphics", id: 3 },
                { answer4: "Private Network Graphics", id: 4 },
            ],
            rightAnswer: 2
        },
        q10: {
            question: "Was bedeutet PDF?",
            answers: [
                { answer1: "Partei des Friedens", id: 1 },
                { answer2: "Port Document Form", id: 2 },
                { answer3: "Portable Data Format", id: 3 },
                { answer4: "Portable Document Format", id: 4 },
            ],
            rightAnswer: 4
        },
        q11: {
            question: "Wie nennt man beim Objektorientiertem Programmieren die Funktion die ein Objekt initialisiert?",
            answers: [
                { answer1: "Konstruktor", id: 1 },
                { answer2: "Methode", id: 2 },
                { answer3: "Klasse", id: 3 },
                { answer4: "Objekt", id: 4 },
            ],
            rightAnswer: 1
        },
        q12: {
            question: "Was gibt den genauen Ort einer Datei an?",
            answers: [
                { answer1: "Weg", id: 1 },
                { answer2: "Strecke", id: 2 },
                { answer3: "Pfad", id: 3 },
                { answer4: "Straße", id: 4 },
            ],
            rightAnswer: 3
        },
        q13: {
            question: "Wie wird 15 im binären System dargestellt?",
            answers: [
                { answer1: "1101", id: 1 },
                { answer2: "1111", id: 2 },
                { answer3: "1110", id: 3 },
                { answer4: "1011", id: 4 },
            ],
            rightAnswer: 2
        },
        q14: {
            question: "Welche Einheit kommt nach Terrabyte?",
            answers: [
                { answer1: "Bit", id: 1 },
                { answer2: "Kilobyte", id: 2 },
                { answer3: "Yottabyte", id: 3 },
                { answer4: "Petabyte", id: 4 },
            ],
            rightAnswer: 4
        },
        q15: {
            question: "Was bedeutet die Abkürzung CPU?",
            answers: [
                { answer1: "Central Post Unit", id: 1 },
                { answer2: "Central Produktion Unit", id: 2 },
                { answer3: "Central Processing Unit", id: 3 },
                { answer4: "Central Progress Unit", id: 4 },
            ],
            rightAnswer: 3
        },
        q16: {
            question: "Welcher der genannten Dinge ist KEIN Webbrowser?",
            answers: [
                { answer1: "Steam", id: 1 },
                { answer2: "Opera", id: 2 },
                { answer3: "Google Chrom", id: 3 },
                { answer4: "Firefox", id: 4 },
            ],
            rightAnswer: 1
        },
        q17: {
            question: "Welches ist die Standard-Programmiersprache für das Erstellen von Websites?",
            answers: [
                { answer1: "CSS", id: 1 },
                { answer2: "Latein", id: 2 },
                { answer3: "JavaScript", id: 3 },
                { answer4: "HTML", id: 4 },
            ],
            rightAnswer: 4
        },
        q18: {
            question: "Welche Speicherart wird von SSDs benutzt?",
            answers: [
                { answer1: "Magnetischer Speicher", id: 1 },
                { answer2: "Optischer Speicher", id: 2 },
                { answer3: "Flashspeicher", id: 3 },
                { answer4: "Halbleiterspeicher", id: 4 },
            ],
            rightAnswer: 3
        },
        q19: {
            question: "Wie nennt man eine lokale Verbindung zwischen zwei Computern?",
            answers: [
                { answer1: "WWW", id: 1 },
                { answer2: "LAN", id: 2 },
                { answer3: "WLAN", id: 3 },
                { answer4: "Internet", id: 4 },
            ],
            rightAnswer: 2
        },
    },
    //
    //
    //Thema: 2
    {
        q0: {
            question: "Welcher Prozess wandelt Lichtenergie in chemische Energie um?",
            answers: [
                { answer1: "Photosynthese", id: 1 },
                { answer2: "Verbrennung", id: 2 },
                { answer3: "Oxidation", id: 3 },
                { answer4: "Fermentation", id: 4 },
            ],
            rightAnswer: 1
        },
        q1: {
            question: "Welches Element ist das häufigste in der Erdkruste?",
            answers: [
                { answer1: "Sauerstoff", id: 1 },
                { answer2: "Kohlenstoff", id: 2 },
                { answer3: "Silicium", id: 3 },
                { answer4: "Eisen", id: 4 },
            ],
            rightAnswer: 1
        },
        q2: {
            question: "Welche Einheit wird zur Messung der elektrischen Spannung verwendet?",
            answers: [
                { answer1: "Volt", id: 1 },
                { answer2: "Watt", id: 2 },
                { answer3: "Ampere", id: 3 },
                { answer4: "Ohm", id: 4 },
            ],
            rightAnswer: 1
        },
        q3: {
            question: "Welche der folgenden Farben hat die kürzeste Wellenlänge?",
            answers: [
                { answer1: "Rot", id: 1 },
                { answer2: "Grün", id: 2 },
                { answer3: "Blau", id: 3 },
                { answer4: "Violett", id: 4 },
            ],
            rightAnswer: 4
        },
        q4: {
            question: "Welche der folgenden Kräfte hält den Mond in seiner Umlaufbahn um die Erde?",
            answers: [
                { answer1: "Gravitationskraft", id: 1 },
                { answer2: "Elektromagnetische Kraft", id: 2 },
                { answer3: "Kernkraft", id: 3 },
                { answer4: "Reibungskraft", id: 4 },
            ],
            rightAnswer: 1
        },
        q5: {
            question: "Welche Einheit wird zur Messung der Lautstärke verwendet?",
            answers: [
                { answer1: "Dezibel", id: 1 },
                { answer2: "Hertz", id: 2 },
                { answer3: "Watt", id: 3 },
                { answer4: "Pascal", id: 4 },
            ],
            rightAnswer: 1
        },
        q6: {
            question: "Welcher Planet ist der sonnennächste in unserem Sonnensystem?",
            answers: [
                { answer1: "Merkur", id: 1 },
                { answer2: "Venus", id: 2 },
                { answer3: "Mars", id: 3 },
                { answer4: "Jupiter", id: 4 },
            ],
            rightAnswer: 1
        },
        q7: {
            question: "Welche chemische Formel repräsentiert Wasser?",
            answers: [
                { answer1: "H2O2", id: 1 },
                { answer2: "CO2", id: 2 },
                { answer3: "H2O", id: 3 },
                { answer4: "NH3", id: 4 },
            ],
            rightAnswer: 3
        },
        q8: {
            question: "Welches ist das leichteste Element im Periodensystem?",
            answers: [
                { answer1: "Wasserstoff", id: 1 },
                { answer2: "Sauerstoff", id: 2 },
                { answer3: "Helium", id: 3 },
                { answer4: "Kohlenstoff", id: 4 },
            ],
            rightAnswer: 1
        },
        q9: {
            question: "Welcher Wissenschaftler formulierte die Relativitätstheorie?",
            answers: [
                { answer1: "Isaac Newton", id: 1 },
                { answer2: "Albert Einstein", id: 2 },
                { answer3: "Galileo Galilei", id: 3 },
                { answer4: "Marie Curie", id: 4 },
            ],
            rightAnswer: 2
        },
        q10: {
            question: "Welche Einheit wird zur Messung der Zeit verwendet?",
            answers: [
                { answer1: "Meter", id: 1 },
                { answer2: "Gramm", id: 2 },
                { answer3: "Sekunde", id: 3 },
                { answer4: "Kelvin", id: 4 },
            ],
            rightAnswer: 3
        },
        q11: {
            question: "Welche Farbe hat eine saure Lösung im Universalindikator?",
            answers: [
                { answer1: "Rot", id: 1 },
                { answer2: "Blau", id: 2 },
                { answer3: "Grün", id: 3 },
                { answer4: "Gelb", id: 4 },
            ],
            rightAnswer: 1
        },
        q12: {
            question: "Was ist der chemische Name für Tafelsalz?",
            answers: [
                { answer1: "Natriumchlorid", id: 1 },
                { answer2: "Kaliumchlorid", id: 2 },
                { answer3: "Calciumchlorid", id: 3 },
                { answer4: "Magnesiumchlorid", id: 4 },
            ],
            rightAnswer: 1
        },
        q13: {
            question: "Welcher Teil der Pflanze ist für die Photosynthese verantwortlich?",
            answers: [
                { answer1: "Wurzeln", id: 1 },
                { answer2: "Blätter", id: 2 },
                { answer3: "Stängel", id: 3 },
                { answer4: "Blüten", id: 4 },
            ],
            rightAnswer: 2
        },
        q14: {
            question: "Welches Gas bildet etwa 78% der Erdatmosphäre?",
            answers: [
                { answer1: "Sauerstoff", id: 1 },
                { answer2: "Stickstoff", id: 2 },
                { answer3: "Kohlendioxid", id: 3 },
                { answer4: "Argon", id: 4 },
            ],
            rightAnswer: 2
        },
        q15: {
            question: "Was ist die kleinste Einheit eines chemischen Elements?",
            answers: [
                { answer1: "Atom", id: 1 },
                { answer2: "Molekül", id: 2 },
                { answer3: "Proton", id: 3 },
                { answer4: "Elektron", id: 4 },
            ],
            rightAnswer: 1
        },
        q16: {
            question: "Welche der folgenden Krankheiten ist durch ein Virus verursacht?",
            answers: [
                { answer1: "Malaria", id: 1 },
                { answer2: "Tuberkulose", id: 2 },
                { answer3: "HIV/AIDS", id: 3 },
                { answer4: "Diabetes", id: 4 },
            ],
            rightAnswer: 3
        },
        q17: {
            question: "Welcher Planet ist der sonnennächste Planet in unserem Sonnensystem?",
            answers: [
                { answer1: "Mars", id: 1 },
                { answer2: "Venus", id: 2 },
                { answer3: "Merkur", id: 3 },
                { answer4: "Jupiter", id: 4 },
            ],
            rightAnswer: 3
        },
        q18: {
            question: "Wie nennt man den Vorgang, bei dem Wasser aus einer Pflanze verdunstet?",
            answers: [
                { answer1: "Transpiration", id: 1 },
                { answer2: "Fotosynthese", id: 2 },
                { answer3: "Kondensation", id: 3 },
                { answer4: "Evaporation", id: 4 },
            ],
            rightAnswer: 1
        },
        q19: {
            question: "Was ist der Hauptbestandteil der Luft?",
            answers: [
                { answer1: "Kohlenstoffdioxid", id: 1 },
                { answer2: "Sauerstoff", id: 2 },
                { answer3: "Stickstoff", id: 3 },
                { answer4: "Wasserstoff", id: 4 },
            ],
            rightAnswer: 3
        },
    },

    //
    //
    //Thema: 3
    {
        q0: {
            question: "Wann endete der Zweite Weltkrieg?",
            answers: [
                { answer1: "1945", id: 1 },
                { answer2: "1939", id: 2 },
                { answer3: "1941", id: 3 },
                { answer4: "1943", id: 4 },
            ],
            rightAnswer: 1
        },
        q1: {
            question: "In welchem Jahr fand die Französische Revolution statt?",
            answers: [
                { answer1: "1789", id: 1 },
                { answer2: "1804", id: 2 },
                { answer3: "1798", id: 3 },
                { answer4: "1812", id: 4 },
            ],
            rightAnswer: 1
        },
        q2: {
            question: "Welcher deutsche Kaiser regierte während des Ersten Weltkriegs?",
            answers: [
                { answer1: "Wilhelm I.", id: 1 },
                { answer2: "Friedrich III.", id: 2 },
                { answer3: "Wilhelm II.", id: 3 },
                { answer4: "Otto von Bismarck", id: 4 },
            ],
            rightAnswer: 3
        },
        q3: {
            question: "Wer war der erste Präsident der Vereinigten Staaten von Amerika?",
            answers: [
                { answer1: "George Washington", id: 1 },
                { answer2: "Thomas Jefferson", id: 2 },
                { answer3: "Abraham Lincoln", id: 3 },
                { answer4: "John F. Kennedy", id: 4 },
            ],
            rightAnswer: 1
        },
        q4: {
            question: "Wann begann der Erste Weltkrieg?",
            answers: [
                { answer1: "1914", id: 1 },
                { answer2: "1918", id: 2 },
                { answer3: "1916", id: 3 },
                { answer4: "1920", id: 4 },
            ],
            rightAnswer: 1
        },
        q5: {
            question: "In welchem Jahr wurde die Berliner Mauer errichtet?",
            answers: [
                { answer1: "1961", id: 1 },
                { answer2: "1956", id: 2 },
                { answer3: "1973", id: 3 },
                { answer4: "1989", id: 4 },
            ],
            rightAnswer: 1
        },
        q6: {
            question: "Wer war der Gründer des Osmanischen Reiches?",
            answers: [
                { answer1: "Mehmed der Eroberer", id: 1 },
                { answer2: "Süleyman der Prächtige", id: 2 },
                { answer3: "Osman I.", id: 3 },
                { answer4: "Mustafa Kemal Atatürk", id: 4 },
            ],
            rightAnswer: 3
        },
        q7: {
            question: "Welches Land führte die Industrialisierung im 18. Jahrhundert an?",
            answers: [
                { answer1: "Großbritannien", id: 1 },
                { answer2: "Deutschland", id: 2 },
                { answer3: "Frankreich", id: 3 },
                { answer4: "USA", id: 4 },
            ],
            rightAnswer: 1
        },
        q8: {
            question: "Welche berühmte Rede hielt Martin Luther King Jr.?",
            answers: [
                { answer1: "I Have a Dream", id: 1 },
                { answer2: "Yes, we can!", id: 2 },
                { answer3: "Give me liberty or give me death!", id: 3 },
                { answer4: "Ich bin ein Berliner", id: 4 },
            ],
            rightAnswer: 1
        },
        q9: {
            question: "Wer war der erste Mensch, der den Mount Everest bestiegen hat?",
            answers: [
                { answer1: "Edmund Hillary", id: 1 },
                { answer2: "Reinhold Messner", id: 2 },
                { answer3: "Tenzing Norgay", id: 3 },
                { answer4: "George Mallory", id: 4 },
            ],
            rightAnswer: 3
        },
        q10: {
            question: "Wann wurde die Unabhängigkeit der Vereinigten Staaten von Amerika erklärt?",
            answers: [
                { answer1: "1776", id: 1 },
                { answer2: "1789", id: 2 },
                { answer3: "1812", id: 3 },
                { answer4: "1865", id: 4 },
            ],
            rightAnswer: 1
        },
        q11: {
            question: "Wer schrieb das Buch '1984'?",
            answers: [
                { answer1: "George Orwell", id: 1 },
                { answer2: "Aldous Huxley", id: 2 },
                { answer3: "Ray Bradbury", id: 3 },
                { answer4: "Ernest Hemingway", id: 4 },
            ],
            rightAnswer: 1
        },
        q12: {
            question: "In welchem Jahr endete der Kalte Krieg?",
            answers: [
                { answer1: "1989", id: 1 },
                { answer2: "1991", id: 2 },
                { answer3: "1975", id: 3 },
                { answer4: "1995", id: 4 },
            ],
            rightAnswer: 2
        },
        q13: {
            question: "Wer war der erste Mensch im Weltall?",
            answers: [
                { answer1: "Yuri Gagarin", id: 1 },
                { answer2: "Neil Armstrong", id: 2 },
                { answer3: "Buzz Aldrin", id: 3 },
                { answer4: "Alan Shepard", id: 4 },
            ],
            rightAnswer: 1
        },
        q14: {
            question: "Welcher Papst leitete die Reformation der katholischen Kirche ein?",
            answers: [
                { answer1: "Papst Franziskus", id: 1 },
                { answer2: "Papst Benedikt XVI.", id: 2 },
                { answer3: "Papst Johannes Paul II.", id: 3 },
                { answer4: "Papst Leo X.", id: 4 },
            ],
            rightAnswer: 4
        },
        q15: {
            question: "Welches Land führte den ersten bemannten Flug ins All durch?",
            answers: [
                { answer1: "Sowjetunion", id: 1 },
                { answer2: "USA", id: 2 },
                { answer3: "China", id: 3 },
                { answer4: "Deutschland", id: 4 },
            ],
            rightAnswer: 1
        },
        q16: {
            question: "Wann endete der Hundertjährige Krieg?",
            answers: [
                { answer1: "1453", id: 1 },
                { answer2: "1300", id: 2 },
                { answer3: "1488", id: 3 },
                { answer4: "1372", id: 4 },
            ],
            rightAnswer: 1
        },
        q17: {
            question: "Welches Land führte die Kolonisation Amerikas an?",
            answers: [
                { answer1: "Spanien", id: 1 },
                { answer2: "England", id: 2 },
                { answer3: "Portugal", id: 3 },
                { answer4: "Frankreich", id: 4 },
            ],
            rightAnswer: 1
        },
        q18: {
            question: "Wer war der erste deutsche Bundeskanzler?",
            answers: [
                { answer1: "Konrad Adenauer", id: 1 },
                { answer2: "Helmut Kohl", id: 2 },
                { answer3: "Ludwig Erhard", id: 3 },
                { answer4: "Wilhelm Brandt", id: 4 },
            ],
            rightAnswer: 1
        },
        q19: {
            question: "Welche berühmte Schlacht fand im Jahr 1066 statt?",
            answers: [
                { answer1: "Schlacht bei Waterloo", id: 1 },
                { answer2: "Schlacht bei Hastings", id: 2 },
                { answer3: "Schlacht bei Stalingrad", id: 3 },
                { answer4: "Schlacht bei Agincourt", id: 4 },
            ],
            rightAnswer: 2
        },
    },
];

const lobbyStore = {
    lobbies: new Map(),

    themes,

    addLobby,

    findLobby,

    keysToRemoveLobby: [],

}

function addLobby({lobbyId, gameMode, groupName, players, theme, time, numberQuestions}){
    const userAnswers = new Map();
    userAnswers.set(players[0], [false, false, false, false])

    this.lobbies.set(lobbyId, {
        lobbyId, 
        groupName, 
        players, 
        gameMode, 
        isRunning: false,
        question: this.themes[theme].q0.question,
        answers: this.themes[theme].q0.answers,
        theme,
        time,
        roundTime: time,
        numberQuestions,
        iteration: 0,
        evaluatedAnswers: 0,
        userAnswers,
        userAnswersArray: [],
        isChange: false,
        roundCounter: 0,
        gameIsOver: false,
    });

    return this.lobbies.get(lobbyId)
}

function findLobby({lobbyId, playerName}){
    const lobby = this.lobbies.get(lobbyId);

    if(!lobby){
        return 1
    }

    lobby.players.push(playerName)
    lobby.userAnswers.set(playerName, [false, false, false, false])
    return lobby
}


module.exports = {lobbyStore};
