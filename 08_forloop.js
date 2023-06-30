for (i = 0; i <= 3; i++) {
  console.log(i);
}
// program to add first n natural numbers
const prompt = require("prompt-sync")({ sigint: true });
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("Sum of first" + " " + n + " " + "natural numbers is : " + sum);

/* syntax or eg for For loop.
// factorial Numbers;
const prompt = require("prompt-sync") ({sigint: true})
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let fact = 1;
for(i=1; i<=n; i++){
    fact *= i;
}
console.log("Factorial of " + n + " is : " + fact);

// FOR IN loop Introduction

let obj = {
    punit: 90,
    harsh:89,
    raghuveer:91,
    shubh:78,
    vanshil:67
}
for(let a in obj){
    console.log("Marks of" + a + "are" + obj[a]);
}
// FOR Of loop introduction
for(let b of "SUNDAY"){  //either string or arrayyy onlyyy;
    console.log(b);
}
*/
