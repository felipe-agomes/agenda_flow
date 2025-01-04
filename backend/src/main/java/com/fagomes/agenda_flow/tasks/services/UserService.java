package com.fagomes.agenda_flow.tasks.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fagomes.agenda_flow.tasks.entities.User;
import com.fagomes.agenda_flow.tasks.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow();
    }

    public List<User> findAllUser() {
        return userRepository.findAll();
    }
}
