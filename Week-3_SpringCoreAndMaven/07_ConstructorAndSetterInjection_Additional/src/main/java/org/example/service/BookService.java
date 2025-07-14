package org.example.service;

import org.example.repository.BookRepository;

public class BookService {

    private final String libraryName;
    private BookRepository bookRepository;

    // Constructor for library name
    public BookService(String libraryName) {
        this.libraryName = libraryName;
    }

    // Setter for BookRepository (setter injection)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("[" + libraryName + "] Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}
