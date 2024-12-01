import React, { useState, useEffect } from 'react';
import database from './firebase';
import Book from './Book';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      database.ref('books').on('value', (snapshot) => {
        const booksData = snapshot.val();
        setBooks(Object.values(booksData));
      });
    };

    fetchBooks();

    return () => {
      database.ref('books').off();
    };
  }, []);

  const handleAddBook = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const isbn = event.target.isbn.value;
    const imageUrl = event.target.imageUrl.value;

    const newBook = new Book(title, author, isbn, imageUrl);
    database.ref('books').push(newBook);

    event.target.reset();
  };

  return (
    <div>
      <h1>My Bookshelf</h1>
      <form onSubmit={handleAddBook}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" />

        <label htmlFor="isbn">ISBN:</label> 1 
        <input type="text" id="isbn" name="isbn" />

        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" name="imageUrl" />

        <button type="submit">Add Book</button>
      </form>

      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            {book.imageUrl && <img src={book.imageUrl} alt={book.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;