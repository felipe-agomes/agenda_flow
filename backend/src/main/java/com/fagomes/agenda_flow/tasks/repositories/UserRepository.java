package com.fagomes.agenda_flow.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fagomes.agenda_flow.tasks.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
