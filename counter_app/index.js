let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let numberOfPeople = document.getElementById("count-save");

console.log(countEl);

let count = 0;

function increment() {
  count += +1;
  countEl.innerHTML = count;
  console.log(count);
}

function savePeople() {
  numberOfPeople.innerHTML = count;

  savePeople.innerHTML = count;
}

function saveCount() {
  let countStr = count + " => ";

  saveEl.textContent += countStr;
}
