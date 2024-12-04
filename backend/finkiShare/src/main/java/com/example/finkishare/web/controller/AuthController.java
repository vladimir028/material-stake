package com.example.finkishare.web.controller;

import com.example.finkishare.model.Role;
import com.example.finkishare.model.User;
import com.example.finkishare.model.dto.AuthenticationResponse;
import com.example.finkishare.model.dto.UserRequest;
import com.example.finkishare.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class AuthController {

    public final UserService userService;

    @GetMapping("/check-login")
    public AuthenticationResponse checkAuthentication(Authentication authentication) {
        if (authentication != null && authentication.isAuthenticated()) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String username = userDetails.getUsername();
            User user = userService.findByUsername(username);
            return new AuthenticationResponse(true, username, user);
        } else {
            return new AuthenticationResponse(false, null, null);
        }
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserRequest userRequest){
        userService.create(
                userRequest.getUsername(),
                userRequest.getEmail(),
                userRequest.getPassword(),
                userRequest.getImage(),
                Role.ROLE_USER
        );
        return "";
    }




}
