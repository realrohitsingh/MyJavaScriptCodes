// Anonymous Function

// function(a,b){
//     console.log(a+b);
// }

//Function with Expression

// let multiply = function (a, b) {
//   console.log(a * b);
// };
// console.log(typeof multiply); // Checking that what is the type of this function
// multiply(20, 10);
// multiply(50, 10);

// let add = function (a, b) {
//   console.log(a + b);
// };
// add(20, 10);
// add(50, 10);

//Immedeatly invoked function with express:

// (function (a, b) {
//   console.log(a + b);
// })(50, 100);

//call back function -> it is passwed as an argument for another function.

// function add(a, b) {
//   return a + b;
// }
// function mul(a, b) {
//   return a * b;
// }

// function calculate(operate, x, y) {
//   return operate(x, y);
// }
// let total = calculate(add, 10, 20);
// console.log(total);

// let product = calculate(mul, 10, 20);
// console.log(product);

setTimeout(() => {
  console.log("Hello World");
}, 3000);

//Arrow Function

let print = (a, b) => {
  console.log("Execute arrow function : " + a * b);
  for (let i = 0; i <= 10; i++) {
    console.log(a + i);
  }
};
print(10, 20);

let sub = (a, b) => console.log(a - b);
sub(10, 20);
