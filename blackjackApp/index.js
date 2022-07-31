let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw an another card?";
  } else if (sum === 21) {
    message = "Youuuu are a WINNER!!!";
    hasBlackJack = true;
  } else {
    message = "You are busted!!! Logging you out...";
    isAlive = false;
  }

  //console.log(hasBlackJack);
  console.log(isAlive);

  console.log(message);
}
