// Game Guess The Number;
const prompt = require("prompt-sync")({ sigint: true });
let num = Math.floor(Math.random() * 100 + 1);
let chance = 0;
console.log("--------------Welcome To Guess The Number Game----------------");
let guess = prompt("Guess The Number between 0 to 100: ");
while (num != guess) {
  if (guess > num) {
    console.log("Your guess is high than Actual Number.");
    chance++;
    guess = prompt("Guess The Number Again! : ");
  } else if (guess < num) {
    console.log("Your guess is low than Actual Number.");
    chance++;
    guess = prompt("Guess The Number Again! : ");
  } else break;
}
console.log("Number Guess Is correct ");
console.log("Congratulation you Won! ");
console.log("Your Point is :  " + (100 - chance));
