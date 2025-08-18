let student = {
  id: "101",
  name: "Rohit",
  subject: ["java", "javascript", "Sql"],
  marks: "70%",
  age: "26",
  isPassed: true,
};
console.log(student);

// view
console.log(student.name);
console.log(student["marks"]);
console.log(student["subject"][0]);
let sub = student["subject"];
console.log(sub);

// add
student.phone = "12345678890";
console.log(student);

// update
student.age = "23";
console.log(student);

//delete

delete student.isPassed;
console.log(student);
