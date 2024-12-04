package com.example.finkishare.service.impl;

import com.example.finkishare.model.Comment;
import com.example.finkishare.model.Post;
import com.example.finkishare.model.User;
import com.example.finkishare.repository.CommentRepository;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.UserRepository;
import com.example.finkishare.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    final private CommentRepository commentRepository;
    final private PostRepository postRepository;
    private final UserRepository userRepository;


    @Override
    public List<Comment> findAllByPostId(Long id) {
        Post post = postRepository.findById(id).orElse(null);
        return commentRepository.findAllByPost(post);
    }

    @Override
    public Comment createNewComment(String text, Long postId, String username) {
        Post post = postRepository.findById(postId).orElse(null);
        User user = userRepository.findByUsername(username).orElse(null);
        Comment comment = new Comment(text, LocalDateTime.now(), post, user);
        return commentRepository.save(comment);
    }
}
