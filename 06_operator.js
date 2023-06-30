console.log("Operators in JS");
//Arithmetic Operator;
let a = 10;
let b = 3;
console.log("a + b: ", a + b);
console.log("a - b: ", a - b);
console.log("a / b: ", a / b);
console.log("a * b: ", a * b);
console.log("a ** b: ", a ** b); // A to the power Bs
console.log("a % b: ", a % b);
console.log("a++: ", a++);
console.log("++a: ", ++a);
console.log("--a: ", --a);
console.log("a--: ", a--);

//Assignment operator;
let c = 10;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c /= 5;
console.log(c);
c *= 5;
console.log(c);

// Comparission Operator
let comp1 = 5;
let comp2 = 6;
console.log("comp1 == comp2", comp1 == comp2);
console.log("comp1 != comp2", comp1 != comp2);
console.log("comp1 === comp2", comp1 === comp2);
console.log("comp1 !== comp2", comp1 !== comp2);
console.log("comp1 > comp2", comp1 > comp2);
console.log("comp1 < comp2", comp1 < comp2);

// logical Operator
let x = 5;
let y = 6;
console.log(x < y && x == 5);
console.log(x > y || x == 5);
console.log(!(x > y));
