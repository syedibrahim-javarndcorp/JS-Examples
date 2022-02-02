class Employee {
  constructor(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
  }
}

class UI {
  addEmployeeToList(employee) {
    const list = document.getElementById("employee-list");
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.department}</td>
             `;
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("department").value = "";
  }
}
// Event Listeners
document
  .getElementById("employee-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const deptpartment = document.getElementById("department").value;

    // instantiate the class
    const employee = new Employee(name, age, deptpartment);

    // instaitate ui object

    const ui = new UI();

    ui.addEmployeeToList(employee);

    ui.clearFields();

    e.preventDefault();
  });
