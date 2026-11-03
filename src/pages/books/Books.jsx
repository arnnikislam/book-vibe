import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { storedBooks, storedWishList } = useContext(BookContext);
  return <div>

  </div>;
};

export default Books;
