//every object in the array themes is one theme.
const themes = [
    //
    //
    //Thema: 1
    {
        q0: {
            question: "frage 1",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 1.", id: 1},
                {answer2: "Zweite Antwort auf Frage 1.", id: 2},
                {answer3: "Dritte Antwort auf Frage 1.", id: 3},
                {answer4: "Fierte Antwort auf Frage 1.", id: 4},
            ],
            rightAnswer: 4
        },
        q1: {
            question: "frage 2",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 2.", id: 1},
                {answer2: "Zweite Antwort auf Frage 2.", id: 2},
                {answer3: "Dritte Antwort auf Frage 2.", id: 3},
                {answer4: "Fierte Antwort auf Frage 2.", id: 4},
            ],
            rightAnswer: 4
        },
        q2: {
            question: "frage 3",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 3.", id: 1},
                {answer2: "Zweite Antwort auf Frage 3.", id: 2},
                {answer3: "Dritte Antwort auf Frage 3.", id: 3},
                {answer4: "Fierte Antwort auf Frage 3.", id: 4},
            ],
            rightAnswer: 4
        },
        q3: {
            question: "frage 4",
            answers: [ 
                {answer1: "Erste Antwort auf Frage 4.", id: 1},
                {answer2: "Zweite Antwort auf Frage 4.", id: 2},
                {answer3: "Dritte Antwort auf Frage 4.", id: 3},
                {answer4: "Fierte Antwort auf Frage 4.", id: 4},
            ],
            rightAnswer: 4
        },
        q4: {
            question: "frage 5",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q5: {
            question: "frage 6",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q6: {
            question: "frage 7",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q7: {
            question: "frage 8",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q8: {
            question: "frage 9",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q9: {
            question: "frage 10",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q10: {
            question: "frage 11",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q11: {
            question: "frage 12",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q12: {
            question: "frage 13",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q13: {
            question: "frage 14",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q14: {
            question: "frage 15",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q15: {
            question: "frage 16",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q16: {
            question: "frage 17",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q17: {
            question: "frage 18",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q18: {
            question: "frage 19",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q19: {
            question: "frage 20",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
    },
    //
    //
    //Thema: 2
    {
        q0: {
            question: "frage 1",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q1: {
            question: "frage 2",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q2: {
            question: "frage 3",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q3: {
            question: "frage 4",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q4: {
            question: "frage 5",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q5: {
            question: "frage 6",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q6: {
            question: "frage 7",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q7: {
            question: "frage 8",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q8: {
            question: "frage 9",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q9: {
            question: "frage 10",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q10: {
            question: "frage 11",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q11: {
            question: "frage 12",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q12: {
            question: "frage 13",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q13: {
            question: "frage 14",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q14: {
            question: "frage 15",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q15: {
            question: "frage 16",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q16: {
            question: "frage 17",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q17: {
            question: "frage 18",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q18: {
            question: "frage 19",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q19: {
            question: "frage 20",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
    },
    //
    //
    //Thema: 3
    {
        q0: {
            question: "frage 1",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q1: {
            question: "frage 2",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q2: {
            question: "frage 3",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q3: {
            question: "frage 4",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q4: {
            question: "frage 5",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q5: {
            question: "frage 6",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q6: {
            question: "frage 7",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q7: {
            question: "frage 8",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q8: {
            question: "frage 9",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q9: {
            question: "frage 10",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q10: {
            question: "frage 11",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q11: {
            question: "frage 12",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q12: {
            question: "frage 13",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q13: {
            question: "frage 14",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q14: {
            question: "frage 15",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q15: {
            question: "frage 16",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
        },
        q16: {
            question: "frage 17",
            answers: [
                { answer1: "Erste Antwort auf Frage 1.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 1.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 1.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 1.", id: 4 },
            ],
            rightAnswer: 4
        },
        q17: {
            question: "frage 18",
            answers: [
                { answer1: "Erste Antwort auf Frage 2.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 2.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 2.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 2.", id: 4 },
            ],
            rightAnswer: 4
        },
        q18: {
            question: "frage 19",
            answers: [
                { answer1: "Erste Antwort auf Frage 3.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 3.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 3.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 3.", id: 4 },
            ],
            rightAnswer: 4
        },
        q19: {
            question: "frage 20",
            answers: [
                { answer1: "Erste Antwort auf Frage 4.", id: 1 },
                { answer2: "Zweite Antwort auf Frage 4.", id: 2 },
                { answer3: "Dritte Antwort auf Frage 4.", id: 3 },
                { answer4: "Fierte Antwort auf Frage 4.", id: 4 },
            ],
            rightAnswer: 4
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
