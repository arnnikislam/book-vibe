import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getReadListFromLocalDB,
  getWishListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getReadListFromLocalDB());
  const [storedWishList, setStoredWishList] = useState(() =>
    getWishListFromLocalDB(),
  );

  // useEffect(() => {
  //   const getReadListFromLocal = getReadListFromLocalDB();
  //   setReadList(getReadListFromLocal)
  // }, []);

  const handleMarkAsRead = (currentBook) => {
    addReadListToLocalDB(currentBook);

    const isExistInWishList = storedWishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInWishList) {
      toast.error("Book exist in Wish List");
      return;
    }

    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warning("Book already exist");
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} added successfully`);
    }
  };

  const handleWishList = (currentBook) => {
    addWishListToLocalDB(currentBook);

    const isExistInReadBooks = readList.find(
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
    readList,
    setReadList,
    handleMarkAsRead,
    storedWishList,
    setStoredWishList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
