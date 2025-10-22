// let a = 10;
// let b = ++a;
// let res = --b + a++ + --a;
// console.log(res);

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

// let str = "this is javascript";
// str = str.split(" ").reverse().join(" ");
// console.log(str);

// let name = "Rohit";
// let isVowel = 'aeiou'.includes(name.charAt(0).toLowerCase());
// console.log(isVowel);

// let arr = [10,20,30];
// let res = arr.filter((el)=> {
//     return el*el>500;

// })
// console.log(res);

// let arr = [10, 20, 30];
// let res = arr.map(el => el * el);
// console.log(res);


for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    });
}