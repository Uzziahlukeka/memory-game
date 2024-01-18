// Array containing objects with names and image paths
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

// Shuffle the cardArray to randomize card positions
cardArray.sort(() => 0.5 - Math.random());

// Get HTML elements using their IDs
const gridDisplay = document.querySelector('#grid'); // Getting the HTML grid
const resultDisplay = document.querySelector('#result'); // Getting the HTML result tag

// Initialize variables to store game state
let cardChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

// Function to create the game board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
    // Generating and printing a grid of pictures with a blank
}

// Function to check for card matches
function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        alert('You picked the same card!');
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!!');
    }
    resultDisplay.textContent = cardsWon.length;

    cardChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = 'Congratulations, you found them all!!';
    }
}

// Function to flip a card when clicked
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log('Clicked', cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Call the createBoard function to initialize the game
createBoard();
