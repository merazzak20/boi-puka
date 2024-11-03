import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center mb-5">Books</h2>
      {/* <p>Books: {books.length}</p> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
