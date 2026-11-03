import { Link } from "react-router";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";

const ListedBooksNotFound = ({title}) => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-6">
      <div className="flex w-full  flex-col items-center rounded-2xl border-2 border-dashed border-base-300 bg-base-100 px-6 py-12 text-center">
        {/* Icon */}
        <div className="relative mb-5">
          <div className="absolute -inset-3 rounded-full bg-[#50B1C9]/10"></div>
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#50B1C9]/20 text-[#50B1C9]">
            <FiHeart className="text-4xl" />
          </div>
        </div>

        {/* Text */}
        <h2 className="font-serif text-2xl font-bold">
          {title}
        </h2>
        <p className="mt-2 max-w-xs text-sm opacity-70">
          Books you save for later will show up here. Start exploring and add
          your favorites.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="btn mt-6 border-none bg-[#50B1C9] text-white hover:opacity-90"
        >
          Browse Books <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ListedBooksNotFound;
