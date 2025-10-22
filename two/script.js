let a = 10;
let b = ++a;
let res = --b + a++ + --a;
console.log(res);

// let a = 10;
// console.log(a++ == a);
// console.log(++a == a);
// console.log(--a == a--);

// fun();
// function fun() {
//     console.log(10);

// }
// fun();
// function fun(){
//     console.log(20);
// }
// fun();

// function outer() {
//     let count = 0;
//     return function fun() {
//         console.log(count++);
//     }
// }
// let res = outer();
// res();
// res();