package com.modUp.beta.repository;



import com.modUp.beta.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UsersRepository  extends JpaRepository<Users, Long> {


}
