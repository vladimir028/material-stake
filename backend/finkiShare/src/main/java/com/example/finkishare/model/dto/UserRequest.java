package com.example.finkishare.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserRequest {
    private final String username;
    private final String email;
    private final String password;
    private final String image;
}
