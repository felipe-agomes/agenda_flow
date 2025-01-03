package com.fagomes.agenda_flow.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.fagomes.agenda_flow.tasks.entities.User;
import com.fagomes.agenda_flow.tasks.repositories.UserRepository;

public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow();
    }
}
