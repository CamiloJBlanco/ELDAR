package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User editUser(User users) {
        User user = userRepository.findById(users.getId()).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
        User edituser = new User();
        edituser.setId(user.getId());
        if (users.getFirstName() != null) {
            edituser.setFirstName(users.getFirstName());
        } else {
            edituser.setFirstName(user.getFirstName());
        }
        if (users.getLastName() != null) {
            edituser.setLastName(users.getLastName());
        } else {
            edituser.setLastName(user.getLastName());
        }
        if (users.getDni() != null) {
            edituser.setDni(users.getDni());
        } else {
            edituser.setDni(user.getDni());
        }
        if (users.getEmail() != null) {
            edituser.setEmail(users.getEmail());
        } else {
            edituser.setEmail(user.getEmail());
        }
        return userRepository.save(edituser);
    }
}
