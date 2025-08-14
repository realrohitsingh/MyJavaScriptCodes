// let arr1 = [10, true, null, 10, "hello", 10, 68];
// console.log(arr1);

// // slice
// // let arr2 = arr1.slice(1, 3);
// // console.log(arr2);

// //reverse
// // arr1.reverse();
// // console.log(arr1);

// //to string
// // let str = arr1.toString();
// // console.log(str);
// // console.log(typeof str);

// // join
// // let str = arr1.join(" + ");
// // console.log(str);

// //INCLUDES
// // let a = arr1.includes(10);
// // let b = arr1.includes("Hello");
// // console.log(a);
// // console.log(b);

// // indexof
// let index = arr1.indexOf(10, 1);
// // let index = arr1.indexOf(10);
// // let index = arr1.indexOf("726");
// // let index = arr1.indexOf("hello");
// console.log(index);

// //lastIndexOf
// // let index1 = arr1.lastIndexOf(10, 4);
// let index1 = arr1.lastIndexOf(10);
// console.log(index1);

// Strings

let str = "Welcome to Jspider";
console.log(str);
console.log(str.length);
console.log(str[8]);

let str5 = str.replace("W", "Z");
console.log(str5);

let str6 = str.replaceAll("e", "j");
console.log(str6);

let arr = str.split(" ");
console.log(arr);

let str1 = str.toLocaleUpperCase();
console.log(str1);

let str2 = str.toLocaleLowerCase();
console.log(str2);

let str3 = str.charAt(6);
console.log(str3);

let index = str.indexOf("e", 2);
console.log(index);

let index1 = str.lastIndexOf("e");
console.log(index1);

let sub_str = str.slice(0, 7);
console.log(sub_str);
