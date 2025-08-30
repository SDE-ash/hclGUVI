import React, { useState } from "react";

function EmployeeForm({ onSave }) {
  const [employee, setEmployee] = useState({
    empid: "",
    name: "",
    email: "",
    dob: "",
    salary: "",
  });

  const changeHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    onSave(employee);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="empid"
        placeholder="Enter Employee ID"
        className="form-control"
        onChange={changeHandler}
        value={employee.empid}
      />
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        className="form-control"
        onChange={changeHandler}
        value={employee.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        className="form-control"
        onChange={changeHandler}
        value={employee.email}
      />
      <input
        type="text"
        name="dob"
        placeholder="Enter DOB"
        className="form-control"
        onChange={changeHandler}
        value={employee.dob}
      />
      <input
        type="text"
        name="salary"
        placeholder="Enter Salary"
        className="form-control"
        onChange={changeHandler}
        value={employee.salary}
      />
      <button type="submit" className="btn btn-success">
        AddEmployee
      </button>
    </form>
  );
}

export default EmployeeForm;
