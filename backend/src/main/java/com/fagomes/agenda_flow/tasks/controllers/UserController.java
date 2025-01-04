package com.fagomes.agenda_flow.tasks.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.fagomes.agenda_flow.tasks.entities.User;
import com.fagomes.agenda_flow.tasks.services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping(path = "/api/user")
public class UserController {
    @Autowired
    private UserService userService;
}
