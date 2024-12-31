package com.fagomes.agenda_flow.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fagomes.agenda_flow.tasks.entities.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
}