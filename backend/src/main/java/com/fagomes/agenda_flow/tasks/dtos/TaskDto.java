package com.fagomes.agenda_flow.tasks.dtos;

import java.time.LocalDateTime;

public record TaskDto(Long id,
        String title,
        String description,
        LocalDateTime dueAt,
        LocalDateTime createdAt,
        LocalDateTime completedAt,
        LocalDateTime deletedAt) {

}
