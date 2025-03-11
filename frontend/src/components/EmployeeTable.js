import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:5000/api/employees/all");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:5000/api/employees/delete/${id}`);
    fetchEmployees();
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee ID</th>
          <th>Department</th>
          <th>Phone</th>
          <th>Joining Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.employeeID}>
            <td>{emp.employeeName}</td>
            <td>{emp.employeeID}</td>
            <td>{emp.department}</td>
            <td>{emp.phone}</td>
            <td>{new Date(emp.joiningDate).toLocaleDateString()}</td>
            <td>
              <button onClick={() => deleteEmployee(emp.employeeID)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
