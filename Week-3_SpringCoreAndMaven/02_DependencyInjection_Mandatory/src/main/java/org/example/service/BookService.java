package org.example.service;

import org.example.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Required for Spring setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}
