import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";
import { Link } from "react-router";
const BookCard = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/bookDetails/${book.bookId}`} className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-lg">
      {/* Image */}
      <div className="flex h-56 items-center justify-center rounded-2xl bg-gray-100 py-6">
        <img
          src={image}
          alt={bookName}
          className="h-full w-auto object-contain rounded-2xl shadow-md"
        />
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Author */}
      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        {bookName}
      </h2>
      <p className="mt-3 font-medium text-gray-600">By : {author}</p>

      {/* Divider */}
      <div className="my-4 border-t border-dashed border-gray-300"></div>

      {/* Category & Rating */}
      <div className="flex items-center justify-between text-gray-700">
        <span className="font-medium">{category}</span>
        <span className="flex items-center gap-2 font-medium">
          {rating}
          <FaRegStar className="text-xl" />
        </span>
      </div>
    </Link>
  );
};

export default BookCard;
