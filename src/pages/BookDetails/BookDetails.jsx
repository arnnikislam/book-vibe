import { useLoaderData, useParams } from "react-router";
import BookNotFound from "../ErrorPage/BookNotFound";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  const { paramBookId } = useParams();
  const allBooks = useLoaderData();
  const targetBook = allBooks.find(
    (book) => book.bookId === Number(paramBookId),
  );

  //   if target book return undefined
  if (!targetBook) {
    return <BookNotFound></BookNotFound>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = targetBook;

  return (
    <div className="container mx-auto">
      <div className="mx-auto grid w-[92%] gap-8 md:grid-cols-2 my-8">
        {/* Left: Image */}
        <div className="flex items-center justify-center rounded-2xl bg-base-200 p-8 md:min-h-105">
          <img
            src={image}
            alt={bookName}
            className="max-h-90 rounded-2xl w-auto object-contain shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">
            {bookName}
          </h1>
          <p className="mt-3 font-medium opacity-70">By : {author}</p>

          <div className="divider my-2"></div>
          <p className="font-medium opacity-80">{category}</p>
          <div className="divider my-2"></div>

          <p className="text-sm leading-6 opacity-80">
            <span className="font-bold opacity-100">Review : </span>
            {review}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold">Tag</span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="badge badge-success badge-soft badge-lg font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="divider my-2"></div>

          {/* Info table */}
          <table className="table table-sm">
            <tbody>
              <tr className="border-none">
                <td className="w-44 px-0 opacity-70">Number of Pages:</td>
                <td className="font-bold">{totalPages}</td>
              </tr>
              <tr className="border-none">
                <td className="px-0 opacity-70">Publisher:</td>
                <td className="font-bold">{publisher}</td>
              </tr>
              <tr className="border-none">
                <td className="px-0 opacity-70">Year of Publishing:</td>
                <td className="font-bold">{yearOfPublishing}</td>
              </tr>
              <tr className="border-none">
                <td className="px-0 opacity-70">Rating:</td>
                <td className="font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => handleMarkAsRead(targetBook)}
              className="btn btn-outline btn-md font-bold"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(targetBook)}
              className="btn border-none bg-[#50B1C9] font-bold text-white hover:opacity-90"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
