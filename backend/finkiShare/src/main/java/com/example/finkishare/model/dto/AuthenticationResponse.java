package com.example.finkishare.model.dto;

import com.example.finkishare.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationResponse {
    private final boolean authenticated;
    private final String username;
    private final User user;
}