package com.fagomes.agenda_flow.tasks.webservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fagomes.agenda_flow.tasks.entities.Task;
import com.fagomes.agenda_flow.tasks.services.TaskService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(path = "/api")
public class TasksController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/hello")
    public List<Task> getMethodName() {
        return this.taskService.getAllTasks();
    }

    @GetMapping("/teste")
    public Task getMethodNa() {
        Task task = new Task();
        task.setTitle("title");
        task.setDescription("desc");
        return this.taskService.salvar(task);
    }
    
}
