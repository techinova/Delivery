package com.modUp.beta.auth.entity;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serial;

@Entity
public class Role implements GrantedAuthority {

    @Serial
    private static final long serialVersionUID = -6469391897738445679L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String name;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getAuthority() {
        return name;
    }
}
