import React, { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";
import { addEmployee, deleteEmployee, getAllEmployee } from "../Employee";
import EmployeeForm from "./EmployeeForm";

function EmployeeHome() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployee = async () => {
    const response = await getAllEmployee();
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleSaveEmployee = async (emp) => {
    await addEmployee(emp);
    fetchEmployee();
  };

  const handleDeleteEmployee = async (eid) => {
    await deleteEmployee(eid);
    fetchEmployee();
  };
  return (
    <div>
      <EmployeeForm onSave={handleSaveEmployee} />
      <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
    </div>
  );
}

export default EmployeeHome;
