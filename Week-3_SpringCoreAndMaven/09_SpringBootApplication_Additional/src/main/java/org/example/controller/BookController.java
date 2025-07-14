package org.example.controller;

import org.example.entity.Book;
import org.example.repository.BookRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        System.out.println("GET /api/books called");
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        System.out.println("GET /api/books/" + id + " called");
        Optional<Book> book = bookRepository.findById(id);
        return book.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        System.out.println("POST /api/books called with title: " + book.getTitle() + ", author: " + book.getAuthor());
        return bookRepository.save(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        System.out.println("PUT /api/books/" + id + " called");
        return bookRepository.findById(id).map(book -> {
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            Book saved = bookRepository.save(book);
            System.out.println("Updated book with id: " + id);
            return ResponseEntity.ok(saved);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        System.out.println("DELETE /api/books/" + id + " called");
        if (!bookRepository.existsById(id)) {
            System.out.println("Book with id " + id + " not found");
            return ResponseEntity.notFound().build();
        }
        bookRepository.deleteById(id);
        System.out.println("Deleted book with id: " + id);
        return ResponseEntity.noContent().build();
    }
}
