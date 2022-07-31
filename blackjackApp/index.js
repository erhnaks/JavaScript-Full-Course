let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 2;
let hasBlackJack = false;
let isAlive = true;

console.log(sum);

if (sum <= 20) {
  console.log("Do you want to draw an another card?");
} else if (sum === 21) {
  console.log("Youuuu are a WINNER!!!");
  hasBlackJack = true;
} else {
  console.log("You are busted!!!");
  isAlive = false;
}

//console.log(hasBlackJack);
console.log(isAlive);
