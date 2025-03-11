const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Insert Employee
router.post("/add", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: "Employee Added Successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Employee by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await Employee.findOneAndDelete({ employeeID: req.params.id });
    res.status(200).json({ message: "Employee Deleted Successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Employee by ID
router.put("/update/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeID: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Employees
router.get("/all", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
