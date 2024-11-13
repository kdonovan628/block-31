const express = require('express');
const app = express();
const PORT = 3000;

// Import the employee data from employees.js
const employees = require('./employees');

// Endpoint to send a greeting message
app.get('/', (req, res) => {
  res.send("Hello employees!");
});

// Endpoint to send the full array of employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Endpoint to get an employee by ID
app.get('/employees/:id', (req, res) => {
  const employeeId = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === employeeId);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send({ message: "Employee not found" });
  }
});

// Endpoint to get a random employee
app.get('/employees/random', (req, res) => {
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
  res.json(randomEmployee);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});