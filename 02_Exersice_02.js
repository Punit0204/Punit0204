// Snake water Gun;;
const prompt = require("prompt-sync")({ sigint: true });
console.log("Welcome To Game of snake water amd gun !!");
let User = prompt("Enter Your Choice From Snake, Water, Gun :  ");
let cpu1 = Math.floor(Math.random() * 3);
let cpu = ["Snake", "Water", "Gun"][cpu1];
const match = (cpu, User) => {
  if (cpu == User) {
    return "Tie";
  } else if (cpu == "Snake" && User == "Water") {
    return "CPU Wins";
  } else if (cpu == "Snake" && User == "Gun") {
    return "User Wins";
  } else if (cpu == "Water" && User == "Snake") {
    return "User Wins";
  } else if (cpu == " Water " && User == "Gun") {
    return "CPU Wins";
  } else if (cpu == "Gun" && User == "Water") {
    return "User Wins";
  } else if (cpu == " Gun " && User == " Snake") {
    return "CPU Wins";
  }
};
let result = match(cpu, User);
console.log(`\tCPU: ${cpu} \t\tUser: ${User} \t\tThe Winner is: ${result}\n\n`);
console.log("\t\t\t\tThank You, Well Played!!\t\t");
