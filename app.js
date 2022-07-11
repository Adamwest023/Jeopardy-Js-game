const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

const jeopardyCategories = [
    {
        genre: "WHO",
        questions: [
            {
                question: "Who wrote the Red Rising series?",
                answers: ["Pierce Brown", "JK Rowling"],
                correct: "Pierce Brown",
                level: "hard"
            },
            {
                question: "Who was the first person to step on the moon?",
                answers: ["Neil Armstrong", "Edwin 'Buzz' Aldrin"],
                correct: "Neil Armstrong",
                level: "easy"
            },
            {
                question: "Who was the first U.S President?",
                answers: ["James Madison", "George Washington"],
                correct: "George Washington",
                level: "easy"
            },
            {
                question: "Who invented the atomic bomb",
                answers: ["Robert Oppenheimer", "Albert Einstein"],
                correct: "Robert Oppenheimer",
                level: "medium"
            },
            {
                question: "Who said 'You miss 100% of the shots you don't take'",
                answers: ["Micheal Scott", "Wayne Gretsky"],
                correct: "Wayne Gretsky",
                level: "medium"
            },
        ]
    },
    {
        genre: "WHERE",
        questions: [
            {
                question: "Where is the Eiffel Tower located",
                answers: ["France", "Germany"],
                correct: "France",
                level: "easy"
            }, {
                question: "Where is the capital of Alabama",
                answers: ["Birmingham", "Montgomery"],
                correct: "Montgomery",
                level: "medium"
            }, {
                question: "Where was cotton candy invented ",
                answers: ["Maine", "Tennessee"],
                correct: "Tennessee",
                level: "hard"
            }, {
                question: "Where is the tibia",
                answers: ["Leg", "Arm"],
                correct: "Leg",
                level: "easy"
            }, {
                question: "Where in the world is Carmen Sandiego",
                answers: ["New York", "North Dakota"],
                correct: "North Dakota",
                level: "hard"
            },
        ]
    },
    {
        genre: "WHAT",
        questions: [
            {
                question: "What is the color of a polar bears skin ",
                answers: ["White", "Black"],
                correct: 1,
                level: "medium"
            }, {
                question: "What is the commonly used number for Pi",
                answers: ["3.14", "23"],
                correct: 0,
                level: "easy"
            }, {
                question: "What is the base liqour in an old fashioned",
                answers: ["Vodka", "Whiskey"],
                correct: 1,
                level: "easy"
            }, {
                question: "What is the fastest car in the world ",
                answers: ["McLaren Speedtail", "Jesko Absolut"],
                correct: 1,
                level: "hard"
            }, {
                question: "What is the meaning of life",
                answers: ["Happiness", "42"],
                correct: 1,
                level: "medium"
            },
        ]
    },
    {
        genre: "WHEN",
        questions: [
            {
                question: "When did the civil war start",
                answers: ["1861", "1864"],
                correct: 0,
                level: "hard"
            }, {
                question: "When was the Statue of Liberty dedicated",
                answers: ["1976", "1886"],
                correct: 1,
                level: "hard"
            }, {
                question: "When did Dave Matthew Band start",
                answers: ["1991", "1993"],
                correct: 0,
                level: "hard"
            }, {
                question: "When was Barak Obama elected as President of the United States",
                answers: ["2002", "2009"],
                correct: 1,
                level: "medium"
            }, {
                question: "When is groundhog's day",
                answers: ["Feb 2", " Feb 12"],
                correct: 0,
                level: "medium"
            },
        ]
    },
    {
        genre: "Pop Culture",
        questions: [
            {
                question: "What is the highest grossing movie ",
                answers: ["Avengers Endgame", "Avatar"],
                correct: 0,
                level: "easy"
            }, {
                question: "What sport is The Undertaker known from",
                answers: ["Hockey", "Wrestling"],
                correct: 1,
                level: "easy"
            }, {
                question: "What color pill does Neo take in The Matrix",
                answers: ["Blue", "Red"],
                correct: 1,
                level: "medium"
            }, {
                question: "Who ya gonna call",
                answers: ["Ghostbusters", "The A Team"],
                correct: 0,
                level: "easy"
            }, {
                question: "What was Pixar's first feature movie",
                answers: ["A Bug's Life", "Toy Story"],
                correct: 1,
                level: "easy"
            },
        ]
    },
]

function addCategory(category)  {
    //creates a column for each category with a div and class
    const column = document.createElement("div");
    column.classList.add('genre-column');
    //adds a title to each category genre
    const genreTitle = document.createElement('div');
    genreTitle.classList.add('genre-title');
    genreTitle.innerText = category.genre;

    //adds each to our game variable to populate the html
    column.append(genreTitle)
    game.append(column);
}

//loops through our array and creates a category for each 
jeopardyCategories.forEach(category => addCategory(category))
