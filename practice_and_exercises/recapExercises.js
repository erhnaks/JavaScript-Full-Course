// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName + " " + lastName;

// console.log(fullName);

// let herName = "Linda";

// let greeting = "Hi there";

// function greetLinda() {
//   console.log(greeting + "," + " " + herName + "!");
// }
// greetLinda();

let myPoint = 3;

function add3Point() {
  myPoint += 3;
  console.log(myPoint);
}

function remove1Point() {
  myPoint += -1;
  console.log(myPoint);
}
add3Point(); //6

remove1Point(); //5

add3Point(); //8

remove1Point(); //7

add3Point(); //10
