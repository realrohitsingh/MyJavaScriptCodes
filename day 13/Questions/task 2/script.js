// Write a program to explain fibonnaci series
let n = parseInt(prompt("Enter a Number : "));
let a = 0,
  b = 1;

for (let i = 0; i < n; i++) {
  let temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}
