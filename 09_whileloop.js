//WHILE loop intoduction
const prompt = require("prompt-sync")({ sigint: true });
/*
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i = 0;
while(i<n){
    console.log(i)
    i++;
}
*/
//DO-WHILE loop intoduction
let n = prompt("Enter the value of N: ");
n = Number.parseInt(n);
let i = 0;
do {
  console.log(i);
  i++;
} while (i < n);
