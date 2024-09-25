package com.modUp.beta.auth.controller;


import com.modUp.beta.auth.service.UserService;
import com.modUp.beta.config.jwt.JwtRequest;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private UserService userService;
@Autowired
private AuthenticationManager authenticationManager;



    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(JwtRequest request){
        return userService.signin(request);
    }

}
