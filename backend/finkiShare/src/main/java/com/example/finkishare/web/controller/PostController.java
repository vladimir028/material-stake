package com.example.finkishare.web.controller;

import com.example.finkishare.model.Post;
import com.example.finkishare.model.dto.PostDto;
import com.example.finkishare.service.PostService;
import com.example.finkishare.service.SubjectDetailsService;
import com.example.finkishare.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class PostController {

    private final PostService postService;
    private final UserService userService;
    private final SubjectDetailsService subjectDetailsService;

    @GetMapping("/posts/{id}")
    List<Post> getPostsById(@PathVariable String id) {
        return postService.findAllPostsById(Long.parseLong(id));
    }

    @PostMapping("/posts/add")
    void addNewPost(@RequestBody PostDto postDto) {
        postService.createPost(
                postDto.getTitle(),
                postDto.getText(),
                subjectDetailsService.getSubject(postDto.getSubjectId()),
                userService.findByUsername(postDto.getUsername())
        );
    }

    @GetMapping("/posts/{id}/increase_score")
    Post increaseScore(@PathVariable String id){
        return postService.increaseScore(Long.parseLong(id));
    }

    @GetMapping("/posts/{id}/decrease_score")
    Post decreaseScore(@PathVariable String id){
        return postService.decreaseScore(Long.parseLong(id));
    }


}
