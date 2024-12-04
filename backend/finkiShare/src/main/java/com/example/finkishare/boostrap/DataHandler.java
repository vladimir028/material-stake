package com.example.finkishare.boostrap;

import com.example.finkishare.model.*;
import com.example.finkishare.repository.CommentRepository;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
@AllArgsConstructor
public class DataHandler {

    private final JsonReader jsonReader;
    private final SubjectDetailsRepository subjectDetailsRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostConstruct
    public void init() {

        Random random = new Random();
        List<User> users = new ArrayList<>();
        List<Post> posts = new ArrayList<>();
        List<Comment> comments;

        //Adding USERS
        if (userRepository.count() == 0) {
            users.add(
                    new User(
                            "andrej",
                            "andrej@gmail.com",
                            passwordEncoder.encode("1907"),
                            "",
                            Role.ROLE_USER
                    ));

            users.add(
                    new User(
                            "admin",
                            "admin@gmail.com",
                            passwordEncoder.encode("admin"),
                            "",
                            Role.ROLE_ADMIN
                    ));
            userRepository.saveAll(users);
        }

        //Adding every SUBJECT from 'data/subjects.json'
        List<SubjectDetails> subjectDetailsList = jsonReader.readAndSaveJson("data/subjects.json");
        subjectDetailsRepository.saveAll(subjectDetailsList);

        //FOR EVERY SUBJECT
        for (int i=0; i<subjectDetailsList.size()-1; i++){
            comments = new ArrayList<>();

            //adding sample POSTS for subject i
            for (int j = 0; j < random.nextInt(7); j++) {
                String title = "Title " + (j + 1);
                String description = "Description for Post " + (j + 1);
                LocalDateTime timeStamp = LocalDateTime.now().minusDays(j);
                Post post = new Post(title, description, timeStamp, subjectDetailsRepository.findById((long) i).orElse(null), users.get(0));
                posts.add(post);

                //Adding sample COMMENTS for post j
                for (int c = 0; c < random.nextInt(7); c++){
                    String text = "Comment " + (c + 1);
                    Comment comment = new Comment(text, timeStamp, post, users.get(0));
                    comments.add(comment);
                }
            }
            commentRepository.saveAll(comments);
        }
        postRepository.saveAll(posts);
    }
}