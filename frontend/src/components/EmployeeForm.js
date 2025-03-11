import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = ({ fetchEmployees }) => {
  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeID: "",
    department: "",
    phone: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/employees/add", employee);
    fetchEmployees();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeName"
        placeholder="Employee Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="employeeID"
        placeholder="Employee ID"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      />
      <input type="date" name="joiningDate" onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
