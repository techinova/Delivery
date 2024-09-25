package com.modUp.beta.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.modUp.beta.auth.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    UserDetails findByUsername(String username);


}
