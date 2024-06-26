package com.example.findpark.repository;

import com.example.findpark.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
}
