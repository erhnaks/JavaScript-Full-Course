let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");

//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardEl = document.querySelector("#card-el");

let newCardEl = document.querySelector("#newCard-el");

function getRandomCard() {
  return 5;
}

function startGame() {
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
