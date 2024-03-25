import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className='text-[40px] text-center font-bold'>Books</h1>
      <div className='grid grid-cols-3 gap-6 py-9'>
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
