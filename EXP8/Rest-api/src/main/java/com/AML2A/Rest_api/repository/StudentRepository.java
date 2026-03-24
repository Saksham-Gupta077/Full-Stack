package com.AML2A.Rest_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AML2A.Rest_api.model.Student;


public interface StudentRepository extends JpaRepository<Student,Integer>{
}