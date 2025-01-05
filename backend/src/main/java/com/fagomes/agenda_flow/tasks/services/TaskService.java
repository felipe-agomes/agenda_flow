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
import com.fagomes.agenda_flow.tasks.entities.User;
import com.fagomes.agenda_flow.tasks.repositories.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserService userService;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getTasksByUserIdAndMonth(Long userId, Integer year, Integer month) {
        validateMonth(month);

        LocalDateTime startMonth = getFirstDayFromMonth(year, month);
        LocalDateTime endMonth = getLastDayFromMonth(year, month);

        return taskRepository.findByUserIdAndDueAtBetween(userId, startMonth, endMonth).orElse(new ArrayList<>()); // TODO: AJustar para pegar tambem as tarefas atrasadas
    }

    public List<Task> getTasksByUserIdAndDay(Long userId, Integer year, Integer month, Integer day) {
        validateMonth(month);

        LocalDateTime startDay = LocalDateTime.of(year, month, day, 0, 0);
        LocalDateTime endDay = LocalDateTime.of(year, month, day, 23, 59, 59);

        return taskRepository.findByUserIdAndDueAtBetween(userId, startDay, endDay).orElse(new ArrayList<>());
    }

    public Task save(Task task, Long userId) {
        User user = userService.getUserById(userId);
        task.setUser(user);

        return taskRepository.save(task);
    }

    private void validateMonth(Integer month) {
        if (month < 1 || month > 12) {
            throw new IllegalArgumentException("O mês deve estar entre 1 e 12."); // TODO: Criar uma exception personalizada.
        }

    }

    private LocalDateTime getFirstDayFromMonth(Integer year, Integer month) {
        LocalDate startDate = YearMonth.of(year, month).atDay(1);
        LocalTime startTime = LocalTime.of(0, 0, 0);

        return LocalDateTime.of(startDate, startTime);
    }

    private LocalDateTime getLastDayFromMonth(Integer year, Integer month) {
        LocalDate endDate = YearMonth.of(year, month).atEndOfMonth();
        LocalTime endTime = LocalTime.of(23, 59, 59);

        return LocalDateTime.of(endDate, endTime);
    }
}
