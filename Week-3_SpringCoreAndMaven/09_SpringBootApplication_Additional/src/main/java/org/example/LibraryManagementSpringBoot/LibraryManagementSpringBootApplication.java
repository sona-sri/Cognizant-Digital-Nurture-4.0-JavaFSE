package org.example.LibraryManagementSpringBoot;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("org.example.repository")
@EntityScan("org.example.entity")
public class LibraryManagementSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryManagementSpringBootApplication.class, args);
	}
	// Runs after startup
	public CommandLineRunner demoRunner() {
		return args -> System.out.println("Library Management Spring Boot Application started!");
	}
}
