function calculate(a, b, c) {
  c = a + b;
  function add(x, y) {
    function multiple(p, q) {
      return p * q + (x * y - a) + (p * b + x * a);
    }
    let sum = multiple(10, 20);
    return sum;
  }
  let product = sum * add(10, 20);
  return product;
}
let num = calculate(10, 20);
console.log(num);
