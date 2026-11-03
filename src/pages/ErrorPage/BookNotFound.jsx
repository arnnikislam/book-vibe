import { Link, useNavigate } from "react-router";
import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";
import { FiHome } from "@react-icons/all-files/fi/FiHome";

const BookNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-6">
      <div className="card w-full max-w-lg border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body items-center text-center">
          {/* Icon */}
          <div className="relative mb-2">
            <div className="absolute inset-0 animate-ping rounded-full bg-error/20"></div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-error/10 text-error">
              <FaBookOpen className="text-4xl" />
            </div>
          </div>

          {/* Text */}
          <span className="badge badge-error badge-soft badge-lg font-bold">
            404
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold">Book not found</h2>
          <p className="mt-2 max-w-sm opacity-70">
            The book you're looking for doesn't exist or may have been removed.
            Check the link or browse our collection.
          </p>

          {/* Actions */}
          <div className="card-actions mt-6 flex-wrap justify-center gap-3">
            <button onClick={() => navigate(-1)} className="btn btn-outline">
              <FiArrowLeft /> Go Back
            </button>
            <Link
              to="/"
              className="btn border-none bg-[#50B1C9] text-white hover:opacity-90"
            >
              <FiHome /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNotFound;
