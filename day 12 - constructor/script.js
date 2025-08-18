// Creation of object using class with constructor function in javascript.

class Employee {
  constructor(id, name, salary, department, age, phone) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.department = department;
    this.age = age;
    this.phone = phone;
  }
}
var e1 = new Employee(
  101,
  "Rohit Singh",
  5 + " lakh only",
  "Software Developer",
  23,
  9693376562
);
console.log(e1);
console.log(e1.name);
console.log(e1.salary);

// Creation of object using Constructor Functions in Javascript.

function student(id, name, age, marks, isPresent) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.marks = marks;
  this.isPresent = isPresent;
}
let s1 = new student(102, "Rag Agrahari", 22, [68, 71, 91], false);
console.log(s1);
console.log(s1.name);
console.log(s1.marks[1]);
console.log(s1.isPresent);
