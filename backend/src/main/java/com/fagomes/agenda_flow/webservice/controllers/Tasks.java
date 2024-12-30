package com.fagomes.agenda_flow.webservice.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(path = "/api")
public class Tasks {
    @GetMapping("/hello")
    public String getMethodName() {
        return "Ola, marilene";
    }
}