import React from 'react';
import BookCard from './BookCard';
import './BookShelf.css';

const Bookshelf = () => {
  const books = [
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://m.media-amazon.com/images/I/61ZewDE3beL.jpg",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      coverImage: "https://m.media-amazon.com/images/I/91D4YvdC0dL._AC_UF894,1000_QL80_.jpg",
    },
    // Add more books as needed
  ];

  return (
    <div className="bookshelf-container">
      <div className="bookshelf">
        <div className="shelf-row">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;