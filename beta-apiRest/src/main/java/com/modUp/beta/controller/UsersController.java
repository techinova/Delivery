package com.modUp.beta.controller;

import com.modUp.beta.model.Users;
import com.modUp.beta.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UsersController {

    @Autowired
    private UsersService service;

    @PostMapping(value = "/save")
    public ResponseEntity<Users> saveUsers(@RequestBody Users name) {
        name = service.save(name);
        return ResponseEntity.ok().body(name);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Users> searchUsersId(@PathVariable Long id) {
        Users name = service.findById(id);
        return ResponseEntity.ok().body(name);
    }

    @GetMapping(value = "/findall")
    public ResponseEntity<List<Users>> findAllUsers() {
        List<Users> names = service.findAll();
        return ResponseEntity.ok().body(names);
    }
}
