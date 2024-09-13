package com.modUp.beta.controller;

import com.modUp.beta.model.PersonalData;
import com.modUp.beta.service.PersonalDataService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value= "/datauser")
public class PersonalDataController {

    @Autowired
    private PersonalDataService service;

    public PersonalDataController(PersonalDataService service){this.service = service;}

    @PostMapping(value= "/save")
    public ResponseEntity<PersonalData> saveUser(@RequestBody PersonalData name){
        name =service.save(name);
        return ResponseEntity.ok().body(name);

    }

    @GetMapping(value = "/findall")
    public ResponseEntity<List<PersonalData>> findAll(){
        List<PersonalData> data = service.findallData();

        return ResponseEntity.ok().body(data);
    }


}
