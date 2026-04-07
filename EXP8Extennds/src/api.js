import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/students",
});

// GET all students
export const getAllStudents = () => API.get("");

// GET student by ID
export const getStudentById = (id) => API.get(`/${id}`);

// ADD student
export const addStudent = (student) => API.post("", student);