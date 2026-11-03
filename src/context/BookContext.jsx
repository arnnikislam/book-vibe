import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [storedWishList, setStoredWishList] = useState([]);
  const handleMarkAsRead = (currentBook) => {
    const isExistInWishList = storedWishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInWishList) {
      toast.error("Book exist in Wish List");
      return;
    }

    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warning("Book already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} added successfully`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExistInReadBooks = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadBooks) {
      toast.error("Book exist in Read Book");
      return;
    }
    const isExistBook = storedWishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warning("Book already exist");
    } else {
      setStoredWishList([...storedWishList, currentBook]);
      toast.success(`${currentBook.bookName} added successfully`);
    }
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    storedWishList,
    setStoredWishList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
