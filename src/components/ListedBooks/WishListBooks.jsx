import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import ListedCard from "./ListedCard";
import ListedBooksNotFound from "../../pages/ErrorPage/ListedBooksNotFound";

const WishListBooks = ({ sortingType }) => {
  const { storedWishList } = useContext(BookContext);
  const [filteredWishList, setFilteredWishList] = useState(storedWishList);

  if (storedWishList.length === 0) {
    return (
      <ListedBooksNotFound
        title={"Your wishlist is empty"}
      ></ListedBooksNotFound>
    );
  }

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "rating") {
        const sortedData = [...storedWishList].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilteredWishList(sortedData);
      } else if (sortingType === "pages") {
        const sortedData = [...storedWishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishList(sortedData);
      } else if (sortingType === "year") {
        const sortedData = [...storedWishList].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );
        setFilteredWishList(sortedData);
      }
    }
  }, [sortingType, storedWishList]);

  return (
    <div className="flex flex-col gap-6 my-8">
      {filteredWishList.map((book) => (
        <ListedCard book={book} key={book.bookId}></ListedCard>
      ))}
    </div>
  );
};

export default WishListBooks;
