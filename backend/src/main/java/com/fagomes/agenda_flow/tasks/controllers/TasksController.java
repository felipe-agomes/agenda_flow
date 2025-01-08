package com.fagomes.agenda_flow.tasks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fagomes.agenda_flow.tasks.entities.Task;
import com.fagomes.agenda_flow.tasks.services.TaskService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping(path = "/api/task")
public class TasksController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/month")
    public ResponseEntity<List<Task>> getTasksMonth(@RequestHeader Long userId, @RequestHeader Integer year, @RequestHeader Integer month) {
        return ResponseEntity.ok(taskService.getTasksByUserIdAndMonth(userId, year, month)); // TODO: AJustar para retornar tambem as que estao atrasadas dos meses anteriores
    }

    @GetMapping("/day")
    public ResponseEntity<List<Task>> getTasksDay(@RequestHeader Long userId, @RequestHeader Integer year, @RequestHeader Integer month, @RequestHeader Integer day) {
        return ResponseEntity.ok(taskService.getTasksByUserIdAndDay(userId, year, month, day));
    }

    @PostMapping("/save")
    public ResponseEntity<Task> save(@RequestBody Task task, @RequestHeader Long userId) {
        System.out.println(task.getDueAt());
        return ResponseEntity.ok(taskService.save(task, userId));
    }
    
}