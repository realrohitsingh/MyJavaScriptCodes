// Write a Javascript program to calculate the factorial of n and accept n from browser prompt.
let n = parseInt(prompt("Enter a number to calculate its factorial:"));
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}
alert(`The factorial of ${n} is ${factorial}`);
console.log(`The factorial of ${n} is ${factorial}`);
