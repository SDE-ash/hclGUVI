import axios from "axios";

const uri = "http://localhost:8080/employees";

export const getAllEmployee = () => axios.get(uri);
export const addEmployee = (employee) => axios.post(uri, employee);
export const deleteEmployee = (eid) => axios.delete(`${uri}/${eid}`);
