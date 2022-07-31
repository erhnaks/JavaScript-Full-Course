let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");

//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardEl = document.querySelector("#card-el");

let newCardEl = document.querySelector("#newCard-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw an another card?";
  } else if (sum === 21) {
    message = "Youuuu are a WINNER!!!";
    hasBlackJack = true;
  } else {
    message = "You are busted!!! Logging you out...";
    isAlive = false;
  }

  console.log(isAlive);

  messageEl.textContent = message;

  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
  console.log("do you want to draw an another card?");

  let thirdCard = getRandomCard();

  sum += thirdCard;

  cards.push(thirdCard);

  renderGame();
}
