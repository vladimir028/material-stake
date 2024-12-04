package com.example.finkishare.service;

import com.example.finkishare.model.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> findAllByPostId(Long id);
    Comment createNewComment(String text, Long postId, String username);
}
