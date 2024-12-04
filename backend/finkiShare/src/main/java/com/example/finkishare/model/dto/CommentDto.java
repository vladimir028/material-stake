package com.example.finkishare.model.dto;

import lombok.Data;

@Data
public class CommentDto {
    private String comment;
    private Long postId;
    private String username;
}
