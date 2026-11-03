import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import ListedCard from "./ListedCard";
import ListedBooksNotFound from "../../pages/ErrorPage/ListedBooksNotFound";

const WishListBooks = () => {
  const { storedWishList } = useContext(BookContext);

  if (storedWishList.length === 0) {
    return <ListedBooksNotFound title={"Your wishlist is empty"}></ListedBooksNotFound>;
  }
  return (
    <div className="flex flex-col gap-6 my-8">
      {storedWishList.map((book) => (
        <ListedCard book={book} key={book.bookId}></ListedCard>
      ))}
    </div>
  );
};

export default WishListBooks;
