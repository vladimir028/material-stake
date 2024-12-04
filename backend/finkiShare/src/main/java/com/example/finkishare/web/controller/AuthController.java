package com.example.finkishare.web.controller;

import com.example.finkishare.model.Role;
import com.example.finkishare.model.User;
import com.example.finkishare.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthController {

    public final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @Getter
    @AllArgsConstructor
    static class AuthenticationResponse {
        private final boolean authenticated;
        private final String username;
        private final User user;
    }

    @Getter
    @AllArgsConstructor
    static class UserRequest {
        private final String username;
        private final String email;
        private final String password;
        private final String image;
    }

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
    public String registerUser( @RequestBody UserRequest userRequest){
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
