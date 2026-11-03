import { Link } from "react-router";
import { FiMapPin } from "@react-icons/all-files/fi/FiMapPin";
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { FiFileText } from "@react-icons/all-files/fi/FiFileText";
const ListedCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div
      key={bookId}
      className="flex flex-col gap-6 rounded-2xl border border-base-300 bg-base-100 p-4 md:flex-row md:p-6"
    >
      {/* Image */}
      <div className="flex h-52 items-center justify-center rounded-2xl bg-base-200 p-4 md:w-56 md:shrink-0">
        <img
          src={image}
          alt={bookName}
          className="h-full w-auto rounded-2xl object-contain shadow-md"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="font-serif text-2xl font-bold">{bookName}</h2>
        <p className="mt-3 text-sm font-medium opacity-80">By : {author}</p>

        {/* Tags + year */}
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
          <span className="flex items-center gap-2 text-sm opacity-70">
            <FiMapPin className="text-lg" />
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        {/* Publisher + pages */}
        <div className="mt-3 flex flex-wrap items-center gap-6 text-sm opacity-70">
          <span className="flex items-center gap-2">
            <FiUsers className="text-lg" />
            Publisher: {publisher}
          </span>
          <span className="flex items-center gap-2">
            <FiFileText className="text-lg" />
            Page {totalPages}
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-base-300"></div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge badge-info badge-soft badge-lg rounded-full px-5 py-5 text-sm">
            Category: {category}
          </span>
          <span className="badge badge-warning badge-soft badge-lg rounded-full px-5 py-5 text-sm">
            Rating: {rating}
          </span>
          <Link
            to={`/bookDetails/${bookId}`}
            className="btn btn-success rounded-full px-6 text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
