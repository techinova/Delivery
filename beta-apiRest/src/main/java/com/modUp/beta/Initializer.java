


package com.modUp.beta;

import com.modUp.beta.auth.entity.Role;
import com.modUp.beta.auth.entity.User;
import com.modUp.beta.auth.service.RoleService;
import com.modUp.beta.auth.service.UserService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class Initializer {

    @Autowired
    UserService userService;

    @Autowired
    private RoleService roleService;

    @PostConstruct
    public void criaUsuariosPermissoes(){
        Role roleAdmin = new Role();

        roleAdmin.setName("USER");

        roleService.save(roleAdmin);

        User user = new User();
        user.setActive(true);
        user.setEmail("teste@teste.com");
        user.setName("Rafael Soares");
        user.setPassword(new BCryptPasswordEncoder().encode("123456"));
        user.setUsername("zero");
        user.setRoles(List.of(roleAdmin));
    }


}
