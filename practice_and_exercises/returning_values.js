let player1Time = 103;
let player2Time = 107;

function getFastestPlayer() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player1Time > player2Time) {
    return player2Time;
  } else {
    return "We dont have a winner...";
  }
}

let fastestrace = getFastestPlayer();

console.log("fastestrace: " + fastestrace);

// function winnerPlayer() {
//   return getFastestPlayer();
// }

// console.log(winnerPlayer());

function getTotalRaceTime() {
  return player1Time + player2Time;
}
let totaltime = getTotalRaceTime();

console.log("totaltime: " + totaltime);
