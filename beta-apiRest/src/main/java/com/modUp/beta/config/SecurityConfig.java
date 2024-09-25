package com.modUp.beta.config;


import com.modUp.beta.auth.service.UserService;
import com.modUp.beta.config.jwt.JwtAuthenticationEntryPoint;
import com.modUp.beta.config.jwt.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.DefaultSecurityFilterChain;

import java.util.ArrayList;
import java.util.List;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private boolean securityEnable;

    @Autowired
    public UserService userService;

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;


    @Autowired
    public void configurerGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }


    @Bean
    @Autowired
    public AuthenticationManager authenticationManagerBean(AuthenticationConfiguration authConfiguration) throws Exception {
        final List<GlobalAuthenticationConfigurerAdapter> configurers = new ArrayList<>();
        configurers.add(new GlobalAuthenticationConfigurerAdapter() {
                            @Override
                            public void configure(AuthenticationManagerBuilder auth) throws Exception {

                            }
                        }
        );
        return authConfiguration.getAuthenticationManager();
    }

    @Autowired
    public SecurityConfig(JwtRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean

    public DefaultSecurityFilterChain authenticationManager(HttpSecurity http) throws Exception {
        if (securityEnable) {
            http
                    .csrf(AbstractHttpConfigurer::disable)
                    .authorizeHttpRequests(auth -> auth
                            .requestMatchers("/auth/signin/**").permitAll()
                            .requestMatchers("/actuator/**").permitAll()
                            .requestMatchers("/orders/**").hasAnyRole("ADMIN,USER")
                            .requestMatchers("products/**").authenticated()
                            .anyRequest().authenticated()
                    )
                    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    .exceptionHandling(exception -> exception.authenticationEntryPoint(jwtAuthenticationEntryPoint));

        }
        return http.build();
    }



}