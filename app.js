const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

const jeopardyCatagories = [
    {
        genre: "WHO",
        questions: [
            {
                question: "Who wrote the Red Rising series?",
                answers: ["Pierce Brown", "JK Rowling"],
                correct: 0
            },
            {
                question: "Who was the first person to step on the moon?",
                answers: ["Neil Armstrong", "Edwin 'Buzz' Aldrin"],
                correct: 0
            },
            {
                question: "Who was the first U.S President?",
                answers: ["James Madison", "George Washington"],
                correct: 1
            },
            {
                question: "Who invented the atomic bomb",
                answers: ["Robert Oppenheimer", "Albert Einstein"],
                correct: 0
            },
            {
                question: "Who said 'You miss 100% of the shots you don't take'",
                answers: ["Micheal Scott", "Wayne Gretsky"],
                correct: 1
            },
        ]
    },
    {
        genre: "WHERE",
        questions: [
            {
                question: "Where is the Eiffel Tower located",
                answers: ["France", "Germany"],
                correct: 0
            }, {
                question: "Where is the capital of Alabama",
                answers: ["Birmingham", "Montgomery"],
                correct: 1
            }, {
                question: "Where was cotton candy invented ",
                answers: ["Maine", "Tennessee"],
                correct: 1
            }, {
                question: "Where is the tibia",
                answers: ["Leg", "Arm"],
                correct: 0
            }, {
                question: "Where in the world is Carmen Sandiego",
                answers: ["New York", "North Dakota"],
                correct: 1
            },
        ]
    },
    {
        genre: "WHAT",
        questions: [
            {
                question: "What is the color of a polar bears skin ",
                answers: ["White", "Black"],
                correct: 1
            }, {
                question: "What is the commonly used number for Pi",
                answers: ["3.14", "23"],
                correct: 0
            }, {
                question: "What is the base liqour in an old fashioned",
                answers: ["Vodka", "Whiskey"],
                correct: 1
            }, {
                question: "What is the fastest car in the world ",
                answers: ["McLaren Speedtail", "Jesko Absolut"],
                correct: 1
            }, {
                question: "What is the meaning of life",
                answers: ["Happiness", "42"],
                correct: 1
            },
        ]
    },
    {
        genre: "WHEN",
        questions: [
            {
                question: "When did the civil war start",
                answers: ["1861", "1864"],
                correct: 0
            }, {
                question: "When was the Statue of Liberty dedicated",
                answers: ["1976", "1886"],
                correct: 1
            }, {
                question: "When did Dave Matthew Band start",
                answers: ["1991", "1993"],
                correct: 0
            }, {
                question: "When was Barak Obama elected as President of the United States",
                answers: ["2002", "2009"],
                correct: 1
            }, {
                question: "When is groundhog's day",
                answers: ["Feb 2", " Feb 12"],
                correct: 0
            },
        ]
    },
    {
        genre: "Pop Culture",
        questions: [
            {
                question: "What is the highest grossing movie ",
                answers: ["Avengers Endgame", "Avatar"],
                correct: 0
            }, {
                question: "What sport is The Undertaker known from",
                answers: ["Hockey", "Wrestling"],
                correct: 1
            }, {
                question: "What color pill does Neo take in The Matrix",
                answers: ["Blue", "Red"],
                correct: 1
            }, {
                question: "Who ya gonna call",
                answers: ["Ghostbusters", "The A Team"],
                correct: 0
            }, {
                question: "What was Pixar's first feature movie",
                answers: ["A Bug's Life", "Toy Story"],
                correct: 1
            },
        ]
    },

]
