package com.example.finkishare.service;

import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.User;

import java.util.List;

public interface SubjectDetailsService {
    List<SubjectDetails> findAll();

    SubjectDetails takeSubject(String name);

    SubjectDetails takeSubject(String name, String username);

    List<SubjectDetails> findAllTakenSubjects(String username);
    SubjectDetails getSubject(Long subjectId);
}
