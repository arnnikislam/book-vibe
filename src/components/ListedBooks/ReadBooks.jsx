import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import ListedCard from "./ListedCard";
import ListedBooksNotFound from "../../pages/ErrorPage/ListedBooksNotFound";

const ReadBooks = () => {
  const { storedBooks } = useContext(BookContext);
  if (storedBooks.length === 0) {
    return <ListedBooksNotFound title={"Your read is empty"}></ListedBooksNotFound>;
  }
  return (
    <div className="flex flex-col gap-6 my-8">
      {storedBooks.map((book) => (
        <ListedCard book={book} key={book.bookId}></ListedCard>
      ))}
    </div>
  );
};

export default ReadBooks;
