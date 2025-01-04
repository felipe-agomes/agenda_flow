package com.fagomes.agenda_flow.tasks.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fagomes.agenda_flow.tasks.entities.Task;
import com.fagomes.agenda_flow.tasks.repositories.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getTasksByUserAndMonth(Long userId, Integer year, Integer month) {
        if (month < 1 || month > 12) {
            throw new IllegalArgumentException("O mês deve estar entre 1 e 12."); // TODO: Criar uma exception personalizada.
        }

        LocalDate startDate = YearMonth.of(year, month).atDay(1);
        LocalTime startTime = LocalTime.of(0, 0, 0);
        LocalDateTime startDateTime = LocalDateTime.of(startDate, startTime);

        LocalDate endDate = YearMonth.of(year, month).atEndOfMonth();
        LocalTime endTime = LocalTime.of(23, 59, 59);
        LocalDateTime endDateTime = LocalDateTime.of(endDate, endTime);

        return taskRepository.findByUserIdAndDueAtBetween(userId, startDateTime, endDateTime).orElse(new ArrayList<>());
    }


    public Task salvar(Task task) {
        return taskRepository.save(task);
    }
}
