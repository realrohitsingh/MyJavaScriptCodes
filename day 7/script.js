// functions

function add(a, b) {
  var a = a + b;
  console.log(a);
  //   console.log(b);
}
add(100, 200, 300, 400);

function multiply(a, b) {
  var a = a * b;
  console.log(a);
  return a;
}
let total = multiply(20, 30);
console.log("The Product of the value is : " + total);

function parent(a, b) {
  let c = a + b;
  function child(m, n) {
    ++c;
    let x = m * n;
    return x + c;
  }
  let total = child(10, 20);
  return total;
}
let sum = parent(20, 30);
console.log("The value is : " + sum);
