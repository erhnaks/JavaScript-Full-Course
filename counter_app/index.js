let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let numberOfPeople = document.getElementById("count-save");

console.log(countEl);

let count = 0;

function increment() {
  count += +1;
  countEl.textContent = count;
  console.log(count);
}

function savePeople() {
  numberOfPeople.innerHTML = count;

  savePeople.textContent = count;
}

function saveCount() {
  let countStr = count + " => ";

  saveEl.textContent += countStr;
}

function reset() {
  countreset = 0;

  countEl.textContent = countreset;
  count = 0;
  // saveEl.textContent = countreset;
  // numberOfPeople.textContent = countreset;
}
