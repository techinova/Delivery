


package com.modUp.beta.auth.service;


import com.modUp.beta.auth.entity.User;
import com.modUp.beta.auth.repository.UserRepository;
import com.modUp.beta.config.jwt.JwtRequest;
import com.modUp.beta.config.jwt.JwtTokenUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Component
public class UserService implements UserDetailsService {


    @Autowired private UserRepository repository;

    @Autowired private AuthenticationManager authenticationManager;
    @Autowired private JwtTokenUtil jwtTokenUtil;

    public User save(User User){
        return repository.save(User);
    }

    public User findById(Long id){return repository.findById(id).orElse(null);}

    public List<User> findAll(){return repository.findAll();}

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByUsername(username);
    }
        public ResponseEntity<?> signin(JwtRequest authenticationRequest){

        try{
            authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
            final User userDetails = (User) repository.findByUsername(authenticationRequest.getUsername());
            final String token = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(token);
        }catch(Exception e){
                e.printStackTrace();
                return ResponseEntity.ok(e.getMessage());
            }
        }

    private void authenticate(String username, String password) throws Exception{
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch(DisabledException e){
            throw  new Exception("Usuario desabilitado", e);
        }catch (BadCredentialsException e){
            throw new Exception("Credenciais invalidas", e );
        }
    }
}
