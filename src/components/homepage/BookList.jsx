import { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookList = () => {
  const bookList = use(booksPromise);

  return (
    <div className="container mx-auto md:my-8">
      <h2 className="font-bold text-3xl text-center">Books</h2>
      <div className="grid w-[92%] mx-auto grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 my-4">
        {bookList.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
