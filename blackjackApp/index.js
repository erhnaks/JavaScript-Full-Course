let firstCard = 10;
let secondCard = 7;
let thirdCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.querySelector("#message-el");

//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardEl = document.querySelector("#card-el");

let newCardEl = document.querySelector("#newCard-el");

function startGame() {
  renderGame();
}

function renderGame() {
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

  cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
}

function newCard() {
  console.log("do you want to draw an another card?");

  sum += thirdCard;

  renderGame();
}
