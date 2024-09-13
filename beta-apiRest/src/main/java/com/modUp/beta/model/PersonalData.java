package com.modUp.beta.model;


import jakarta.persistence.*;

@Entity
public class PersonalData {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long id;


    @Column(length = 70, nullable = false)
    private String name;
    @Column(length = 70, nullable = false)
    private String street;
    @Column(length = 5, nullable = false)
    private String number;
    @Column(length = 255, nullable = false)
    private String description;

    //getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }





    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //to string


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "PersonalData{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", street='" + street + '\'' +
                ", number='" + number + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
