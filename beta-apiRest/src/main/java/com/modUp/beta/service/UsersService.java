package com.modUp.beta.service;


import com.modUp.beta.model.Users;
import com.modUp.beta.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    @Autowired
    private UsersRepository repository;


    public Users save(Users name){

        return repository.save(name);
    }

    public Users findById(Long id){
        return repository.findById(id).orElse(null);
    }

    public List<Users> findAll(){
        return repository.findAll();
    }

}
