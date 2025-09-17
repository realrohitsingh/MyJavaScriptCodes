const user = {
  name: "Rohit Singh",
  salary: 60000,
  dept: "Frontend Development",
  role: "React Developer",
  image:
    "https://imgs.search.brave.com/vFNQBF5yGwYPYBjKXEvAo4HUJIGlDIzwzcK2IoikXvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNjEvMTc3NzYx/LTAwNC0wNzc3QkY4/Mi9DaHJpc3RvcGhl/ci1SZWV2ZS1TdXBl/cm1hbi1SaWNoYXJk/LURvbm5lci5qcGc",
};

const container = document.getElementById("userInfo");

const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = user.image;
img.alt = "Profile Image";
card.appendChild(img);

const name = document.createElement("h2");
name.textContent = user.name;
card.appendChild(name);

const salary = document.createElement("p");
salary.innerHTML = `<b>Salary:</b> ₹${user.salary}`;
card.appendChild(salary);

const dept = document.createElement("p");
dept.innerHTML = `<b>Department:</b> ${user.dept}`;
card.appendChild(dept);

const role = document.createElement("p");
role.innerHTML = `<b>Role:</b> ${user.role}`;
card.appendChild(role);

container.appendChild(card);
