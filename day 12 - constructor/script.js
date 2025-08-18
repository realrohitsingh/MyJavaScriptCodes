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

// Write a program to accept user information of name,id,phone,email,password for facebook using class?
// Write a program to accept properties of a car like name,id,model,engine,color and segregrte their values into array using inbult function?

class User {
  constructor(name, id, phone, email, password) {
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}
let user1 = new User(
  "Rohit Singh",
  12345,
  "9876543210",
  "rohitsingh123@gmail.com",
  "12345@rohit"
);
console.log(user1);

class Car {
  constructor(name, id, model, engine, color) {
    this.name = name;
    this.id = id;
    this.model = model;
    this.engine = engine;
    this.color = color;
  }
}
let car1 = new Car("Toyota", 101, "Corolla", "1.8L", "Blue");
let car2 = new Car("Honda", 102, "Civic", "2.0L", "Red");
let car3 = new Car("Ford", 103, "Focus", "2.0L", "Black");
let carArray = [car1, car2, car3];
console.log(carArray);
