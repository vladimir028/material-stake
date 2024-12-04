package com.example.finkishare.model.dto;

import lombok.Data;

@Data
public class PostDto {
        private String title;
        private String text;
        private String username;
        private Long subjectId;
}
