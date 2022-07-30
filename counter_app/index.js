let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerHTML = count;
  console.log(count);
}

let numberOfPeople = document.getElementById("count-save");

console.log(numberOfPeople);

function savePeople() {
  numberOfPeople.innerHTML = count;

  savePeople.innerHTML = count;
  console.log(numberOfPeople);
}
