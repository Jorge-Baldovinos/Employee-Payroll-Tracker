// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
//Get user input to create and return an array of employee objects
const collectEmployees = function() {
  const employeesArray = [];
  const formatCurrency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  let choice = true;
    while (choice === true) {
      let a = window.prompt("Enter first name:");
      let b = window.prompt("Enter last name:");
      let c = window.prompt("Enter salary:");
        if (isNaN(c)) {
          c = 0;
        }
         
      formatCurrency.format(c);
      
      employeesArray.push({firstName: a, lastName: b, salary: c});

      choice = window.confirm("Do you want to add another employee?");
    }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    let convert = parseInt(`${employeesArray[i].salary}`);
    sum = sum + convert;
  }
  let average = sum / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let total = employeesArray.length
  const randomNumber = getRandomInt(`${total}`);
  const randomName = employeesArray[`${randomNumber}`].firstName + " " + employeesArray[`${randomNumber}`].lastName;
  console.log(`Congratulations to ${randomName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
