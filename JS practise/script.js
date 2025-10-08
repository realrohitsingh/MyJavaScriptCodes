// Closure is an ES6 Feature
// Whenever a nested function is created for that a close is also get created.
// Closure is a function which is use to access the parent function data member inside the child function even after the parent function execution is completed.

function disp() {
  var user = "Rohit";
  function dispUser() {
    var userAge = 23;
    console.log(user);
    console.log(userAge);
  }
  dispUser();
}
disp();
