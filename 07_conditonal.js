const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("hey whats your age?");
a = Number.parseInt(a); // Converting a string into a number;
console.log(typeof a);
if (a > 0) {
  console.log("this is a valid age");
} else {
  console.log("this is not a valid age");
}
// If else if statment
let b = prompt("whats your age?");

if (a < 0) {
  console.log("This a invalid Age");
} else if (a > 0 && a <= 18) {
  console.log("You are Under age to drive a vehicle");
} else {
  console.log("Your Age is valid To drive a vehicle");
}

console.log("Done");

// ternary Operatorr
const m = prompt("enter your age: ");
console.log("You Can get", m < 20 ? "NOT Married" : "Married");
