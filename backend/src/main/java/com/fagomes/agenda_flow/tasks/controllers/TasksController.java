package com.fagomes.agenda_flow.tasks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fagomes.agenda_flow.tasks.entities.Task;
import com.fagomes.agenda_flow.tasks.services.TaskService;

@RestController
@RequestMapping(path = "/api/task")
public class TasksController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public ResponseEntity<List<Task>> getTasks(@RequestHeader Long userId, @RequestHeader Integer year, @RequestHeader Integer month) {
        return ResponseEntity.ok(this.taskService.getTasksByUserAndMonth(userId, year, month));
    }
}