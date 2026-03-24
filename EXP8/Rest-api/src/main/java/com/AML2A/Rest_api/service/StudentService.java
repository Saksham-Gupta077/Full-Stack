package com.AML2A.Rest_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AML2A.Rest_api.model.Student;
import com.AML2A.Rest_api.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // Get all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // Get student by ID
    public Student getStudentById(int id) {
        return repository.findById(id).orElse(null);
    }

    // Save new student
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // Update student
    public Student updateStudent(Student student) {
        return repository.save(student);
    }
}