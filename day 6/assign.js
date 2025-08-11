// function printEvenNumbers(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// printEvenNumbers(2, 20);
// let i = 1;
// let n = 5;
// let sum = 0;
// while (i <= n) {
//   sum = sum + i;
//   i++;
// }
// console.log("Sum is 1 + 2 + 3 + 4 + 5 = " + sum);

let start = 1;
let end = 10;
for (let i = start; i <= end; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
