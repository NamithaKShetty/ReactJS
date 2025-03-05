import React from "react";

const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
];

function Books() {
  return (
    <div className="container mt-5">
      <h1>📖 Available Books</h1>
      <ul className="list-group mt-3">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
