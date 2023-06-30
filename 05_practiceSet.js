// take input from user and add them in a array;
/*
const prompt = require("prompt-sync") ({sigint: true})
let arr = [1,2,3,4,5];
let a = prompt("Enter a number ")
a = Number.parseInt(a);
arr.push(a);
console.log(arr);
// add numbers in arr ques 1 until number 0 added to array 1;
const prompt = require("prompt-sync") ({sigint: true})
let arr = [1,2,3,4,5];
let a;
do{
    a = prompt("Enter a number ")
    a = Number.parseInt(a);
    arr.push(a);
}while(a!=0);
console.log(arr);
// Use Filter fuction to seprate number divisible by 10;
let arr2 = [2,5,13,10,20,15,50,70];
let a3 = arr2.filter((value)=>{
    return value%10==0;
})
console.log(a3);
// create an array for square of given numbers;
let arr3 = [2,4,5,6,7,8,9,12];
let a4 = arr3.map((value)=>{
    return value*value;
})
console.log(a4);
*/
// Use reduced function to print factorial of first n Natural Numbers;
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
const reduce_func = (h1, h2) => {
  return h1 * h2;
};
let a5 = arr5.reduce(reduce_func);
console.log(a5);
