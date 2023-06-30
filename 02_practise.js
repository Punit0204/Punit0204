// 01 Wheather age is between 10 to 20
/*
const prompt = require("prompt-sync") ({sigint: true})
let age =prompt("What is your Age?");
if(age>10 && age<20){
    console.log("You are OK");
}
else{
    console.log("You are not OK");
    }
    */
// 02 switch case statsment
const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("What is your Age?");
age = Number.parseInt(age);
switch (age) {
  case "1":
    console.log("You Have TO enjoy And Play Games");
    break;

  case "2":
    console.log("You have to built your carrer");
    break;

  case "3":
    console.log("You have earned Money for your Family");
    break;

  case "4":
    console.log("Enjoy your retired Life peacefully");
    break;

  default:
    console.log("Your Are not from This Planet");
}
