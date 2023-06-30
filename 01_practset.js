// 01 Create a variable
let a = "Punit";
let b = 24;
console.log(a + b);

//02 typeof Operator Use
console.log(typeof a);

//03 Create a constant
const c1 = {
  name: "Punit",
  Section: "B",
  isOwner: true,
};
//c1 = "prajapati"  // Cant add another string or numbers;

//04 add nre key to const

c1["friend"] = "harsh";
c1["name"] = "Kind";
console.log(c1);

//05 word meaning dictionary
const dict = {
  a: "apple",
  b: "banana",
  c: "carrot",
  d: "dog",
  e: "elephant",
};
console.log(dict.e);
