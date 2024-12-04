package com.example.finkishare.service.impl;

import com.example.finkishare.model.Post;
import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.User;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    final private PostRepository postRepository;
    final private SubjectDetailsRepository subjectDetailsRepository;

    @Override
    public List<Post> findAllPostsById(Long id) {
        SubjectDetails s = subjectDetailsRepository.findById(id).orElse(null);
        return postRepository.findAllBySubjectDetails(s);
    }

    @Override
    public Post createPost(String title, String text, SubjectDetails subjectDetails, User author) {
        Post p = new Post(title, text, LocalDateTime.now(), subjectDetails, author);
        return postRepository.save(p);
    }

    @Override
    public Post increaseScore(Long id) {
        Post p = postRepository.findById(id).orElse(null);
        if (p != null){
            return postRepository.save(p.increaseScore());
        }
        return null;
    }

    @Override
    public Post decreaseScore(Long id) {
        Post p = postRepository.findById(id).orElse(null);
        if (p != null){
            return postRepository.save(p.decreaseScore());
        }
        return null;
    }
}

