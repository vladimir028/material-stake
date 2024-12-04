package com.example.finkishare.web.controller;

import com.example.finkishare.model.Comment;
import com.example.finkishare.model.dto.CommentDto;
import com.example.finkishare.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/comments/{id}")
    List<Comment> getCommentsByPostId(@PathVariable String id){
        return commentService.findAllByPostId(Long.parseLong(id));
    }

    @PostMapping("/comments/add")
    void addNewPost(@RequestBody CommentDto commentDto) {
        System.out.println(commentDto);
        commentService.createNewComment(
                commentDto.getComment(),
                commentDto.getPostId(),
                commentDto.getUsername()
        );
    }
}
