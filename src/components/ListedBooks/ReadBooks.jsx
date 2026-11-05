import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import ListedCard from "./ListedCard";
import ListedBooksNotFound from "../../pages/ErrorPage/ListedBooksNotFound";

const ReadBooks = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);
  if (readList.length === 0) {
    return (
      <ListedBooksNotFound title={"Your read is empty"}></ListedBooksNotFound>
    );
  }

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "rating") {
        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
        setFilteredReadList(sortedData);
      } else if (sortingType === "pages") {
        const sortedData = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredReadList(sortedData);
      } else if (sortingType === "year") {
        const sortedData = [...readList].sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing,
        );
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, readList]);

  return (
    <div className="flex flex-col gap-6 my-8">
      {filteredReadList.map((book) => (
        <ListedCard book={book} key={book.bookId}></ListedCard>
      ))}
    </div>
  );
};

export default ReadBooks;
