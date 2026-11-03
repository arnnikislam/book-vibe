import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/ListedBooks/ReadBooks";
import WishListBooks from "../../components/ListedBooks/WishListBooks";

const Books = () => {
  return (
    <div className="container mx-auto">
      <div className="w-[92%] mx-auto my-4">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishListBooks />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Books;
