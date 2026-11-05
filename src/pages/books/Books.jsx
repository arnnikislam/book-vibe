import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/ListedBooks/ReadBooks";
import WishListBooks from "../../components/ListedBooks/WishListBooks";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto">
      <div className="w-[92%] mx-auto my-4">
        <div className="bg-base-300 p-6 my-4 rounded-2xl">
          <h1 className="font-bold text-3xl text-center">Book</h1>
        </div>
        <div className="dropdown my-6 flex justify-center">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#23BE0A] rounded-xl px-8 text-lg text-white"
          >
            Sort By {sortingType} <FiChevronDown className="ml-2 text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu z-10 mt-0 min-w-56 rounded-b-xl bg-base-200 p-3 text-center"
          >
            <li>
              <a
                className="justify-center"
                onClick={() => setSortingType("rating")}
              >
                Rating
              </a>
            </li>
            <li>
              <a
                className="justify-center"
                onClick={() => setSortingType("pages")}
              >
                Number of pages
              </a>
            </li>
            <li>
              <a
                className="justify-center"
                onClick={() => setSortingType("year")}
              >
                Publisher year
              </a>
            </li>
          </ul>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks sortingType={sortingType}></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishListBooks sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
