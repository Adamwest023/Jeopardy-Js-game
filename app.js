const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
let score = 0;

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
                question: "What is the color of a polar bears skin",
                answers: ["White", "Black"],
                correct: "Black",
                level: "medium"
            }, {
                question: "What is the commonly used number for Pi",
                answers: ["3.14", "23"],
                correct: "3.14",
                level: "easy"
            }, {
                question: "What is the base liqour in an old fashioned",
                answers: ["Vodka", "Whiskey"],
                correct: "Whiskey",
                level: "easy"
            }, {
                question: "What is the fastest car in the world ",
                answers: ["McLaren Speedtail", "Jesko Absolut"],
                correct: "Jesko Absolut",
                level: "hard"
            }, {
                question: "What is the meaning of life",
                answers: ["Happiness", "42"],
                correct: "42",
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
                correct: "1991",
                level: "hard"
            }, {
                question: "When was Barak Obama elected as President of the United States",
                answers: ["2002", "2009"],
                correct: "2009",
                level: "medium"
            }, {
                question: "When is groundhog's day",
                answers: ["Feb 2", " Feb 12"],
                correct: "Feb 2",
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
                correct: "Avengers Endgame",
                level: "easy"
            }, {
                question: "What sport is The Undertaker known from",
                answers: ["Hockey", "Wrestling"],
                correct: "Wrestling",
                level: "easy"
            }, {
                question: "What color pill does Neo take in The Matrix",
                answers: ["Blue", "Red"],
                correct: "Red",
                level: "medium"
            }, {
                question: "Who ya gonna call",
                answers: ["Ghostbusters", "The A Team"],
                correct: "Ghostbusters",
                level: "easy"
            }, {
                question: "What was Pixar's first feature movie",
                answers: ["A Bug's Life", "Toy Story"],
                correct: "Toy Story",
                level: "easy"
            },
        ]
    },
]



function addCategory(category) {
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

    //sets the cards to show a value depending on how hard the question is.
    category.questions.forEach((question) => {
        const card = document.createElement('div');
        card.classList.add('card');
        column.append(card);

        if (question.level === "easy") {
            card.innerHTML = 100
        }
        if (question.level === "medium") {
            card.innerHTML = 200
        }
        if (question.level === "hard") {
            card.innerHTML = 300
        }
        // sets attributes to each card depending on which question is being passed through
        card.setAttribute('data-question', question.question);
        card.setAttribute('data-answer-1', question.answers[0]);
        card.setAttribute('data-answer-2', question.answers[1]);
        card.setAttribute('data-correct', question.correct);
        card.setAttribute('data-value', card.innerHTML)

        //adding an event listener to flip card 
        card.addEventListener('click', flipCard);

    })
}

//loops through our array and creates a category for each 
jeopardyCategories.forEach(category => addCategory(category));


function flipCard() {
    this.innerHTML = "";
    this.style.fontSize = "15px";
    this.style.lineHeight = "30px";
    const textDisplay = document.createElement('div');
    //add text from the corrosponding data
    textDisplay.classList.add('card-text');

    //create buttons 
    const firstButton = document.createElement('button');
    const secondButton = document.createElement('button');
    firstButton.classList.add('firstButton');
    secondButton.classList.add('button2');
    firstButton.innerHTML = this.getAttribute('data-answer-1');
    secondButton.innerHTML = this.getAttribute('data-answer-2');
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)

    //add what we created to the div
    this.append(textDisplay, firstButton, secondButton);
    textDisplay.innerHTML = this.getAttribute('data-question');

    //remove the ability to click other cards while one is flipped. 
    const allCards = Array.from(document.querySelectorAll('.card'));
    allCards.forEach((card) => card.removeEventListener('click', flipCard));
}


function getResult() {

    const allCards = Array.from(document.querySelectorAll('.card'));
    allCards.forEach((card) => card.addEventListener('click', flipCard));

    const cardOfButton = this.parentElement

    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute("data-value"));
        scoreDisplay.innerHTML = score;
        cardOfButton.classList.add('correct-answer');
        //will delete everything from card starting bottom to top to clear the card
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100);
    } else {
        cardOfButton.classList.add('wrong-answer');
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)

}