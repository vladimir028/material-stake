package com.example.finkishare.service.impl;

import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.User;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.repository.UserRepository;
import com.example.finkishare.service.SubjectDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SubjectDetailsServiceImpl implements SubjectDetailsService {

    final private SubjectDetailsRepository subjectDetailsRepository;
    final private UserRepository userRepository;

    @Override
    public List<SubjectDetails> findAll() {
        return subjectDetailsRepository.findAll();
    }

    @Override
    public SubjectDetails takeSubject(String name) {
        SubjectDetails s =  subjectDetailsRepository.findByName(name.replace("\"", ""));
        s.setIsTaken(!s.getIsTaken());
        return subjectDetailsRepository.save(s);
    }

    @Override
    public SubjectDetails takeSubject(String name, String username) {
        SubjectDetails subject =  subjectDetailsRepository.findByName(name.replace("\"", ""));
        User user = userRepository.findByUsername(username).orElse(null);
        if (user != null){
            user.takeSubject(subject);
            userRepository.save(user);
        }
        return subject;
    }

    @Override
    public List<SubjectDetails> findAllTakenSubjects(String username) {
        return subjectDetailsRepository.findTakenSubjectsByUsername(username);
    }

    @Override
    public SubjectDetails getSubject(Long subjectId) {
        return subjectDetailsRepository.findById(subjectId).orElse(null);
    }
}
