package org.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;

    public Book() {}

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    // Getters and setters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) {
        System.out.println("Setting title: " + title);
        this.title = title;
    }
    public String getAuthor() { return author; }
    public void setAuthor(String author) {
        System.out.println("Setting author: " + author);
        this.author = author;
    }
}
