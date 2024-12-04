package com.example.finkishare.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDateTime timeStamp;
    private Long upScore;
    private Long downScore;

    @ManyToOne
    private SubjectDetails subjectDetails;

    @ManyToOne
    private User author;

    public Post() {
    }

    public Post(String title, String description, LocalDateTime timeStamp, SubjectDetails subjectDetails, User author) {
        this.title = title;
        this.description = description;
        this.timeStamp = timeStamp;
        this.subjectDetails = subjectDetails;
        this.author = author;
        this.downScore = 0L;
        this.upScore = 0L;
    }

    public Post increaseScore(){
        this.upScore += 1;
        return this;
    }

    public Post decreaseScore(){
        this.downScore -= 1;
        return this;
    }
}
