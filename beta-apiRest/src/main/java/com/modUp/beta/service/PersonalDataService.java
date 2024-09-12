package com.modUp.beta.service;


import com.modUp.beta.model.PersonalData;
import com.modUp.beta.repository.PersonalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalDataService {

    @Autowired
    private PersonalDataRepository repository;

    public PersonalData save(PersonalData name){
        return repository.save(name);
    }
    public List<PersonalData> findallData(){return repository.findAll();}




}
