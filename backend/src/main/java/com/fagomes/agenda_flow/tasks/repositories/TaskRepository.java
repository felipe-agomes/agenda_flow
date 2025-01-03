package com.fagomes.agenda_flow.tasks.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fagomes.agenda_flow.tasks.entities.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
    Optional<List<Task>> findByUserIdAndDueAtBetween(Long userId, LocalDateTime startDate, LocalDateTime endDate);
}