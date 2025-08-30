function EmployeeList({ employees, onDelete }) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>EmployeeId</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.empid}>
              <td>{e.empid}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.dob}</td>
              <td>{e.salary}</td>
              <td>
                <button className="btn btn-link">Edit</button>
                <button
                  className="btn btn-link"
                  onClick={() => onDelete(e.empid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
