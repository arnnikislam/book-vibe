// for readList
export const getReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  if (allReadList) {
    return JSON.parse(allReadList);
  }
  return [];
};

export const addReadListToLocalDB = (currentBook) => {
  const allBooks = getReadListFromLocalDB();
  const isAlreadyExist = allBooks.find(
    (book) => book.bookId == currentBook.bookId,
  );
  if (!isAlreadyExist) {
    allBooks.push(currentBook);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

// for wishList
export const getWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) {
    return JSON.parse(allWishList);
  }
  return [];
};

export const addWishListToLocalDB = (currentBook) => {
  const allBooks = getWishListFromLocalDB();
  const isAlreadyExist = allBooks.find(
    (book) => book.bookId == currentBook.bookId,
  );
  if (!isAlreadyExist) {
    allBooks.push(currentBook);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};
