const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  employeeID: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  phone: { type: String, required: true },
  joiningDate: { type: Date, required: true },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
