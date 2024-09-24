

package com.modUp.beta.config;


import com.modUp.beta.config.jwt.JwtAuthenticationEntryPoint;
import com.modUp.beta.config.jwt.JwtRequestFilter;
import com.modUp.beta.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

@Autowired
public UsersService usersService;
@Autowired
private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
@Autowired
private JwtRequestFilter requestFilter;


@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth ) throws Exception{
    auth.userDetailsService(usersService).passwordEncoder(passwordEncoder());
}


@Bean
@Override
    public AuthenticationManager authenticationManagerBean() throws Exception{
    return
            super.authenticationManagerBean();
}
@Bean
    public BCryptPasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
}

}


