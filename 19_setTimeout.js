const prompt = require("prompt-sync")({ sigint: true });
console.log("Hello");

const sum = (a, b, c) => {
  console.log("Yes I am Runnning\n" + (a + b + c));
};
/*
setTimeout(sum,2000,2,5,7);
setInterval(function(){
    console.log("\n\t\t\t WARNING\t\t\t\n")
},3000)

/*
let a = setTimeout(function(){
    console.log("Hey I am inside setTimeout");
},5000)
let b = prompt("Do you want tp run the setTimeout?:")
if("No"==b){

    clearTimeout(a);
}
*/
