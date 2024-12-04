package com.example.finkishare.web.controller;

import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.dto.TakeSubjectDto;
import com.example.finkishare.service.CommentService;
import com.example.finkishare.service.PostService;
import com.example.finkishare.service.SubjectDetailsService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
public class SubjectController {

    final private SubjectDetailsService subjectDetailsService;
    final private PostService postService;
    final private CommentService commentService;

    @GetMapping("/subjects")
    List<SubjectDetails> findSubjects(HttpSession session){
        session.setAttribute("loggedin", true);
        return subjectDetailsService.findAll();
    }

    @PostMapping("/subjects")
    void saveSubject(@RequestBody TakeSubjectDto body){
        subjectDetailsService.takeSubject(body.getName(), body.getUsername());
    }

    @GetMapping("/subjects/taken")
    List<SubjectDetails> findTakenSubjects(@RequestParam String username){
        return subjectDetailsService.findAllTakenSubjects(username);
    }

    @GetMapping("/subject/get/{id}")
    SubjectDetails getSubject(@PathVariable Long id) {
        return subjectDetailsService.getSubject(id);
    }

    

}
