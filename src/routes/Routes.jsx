import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "bookDetails/:paramBookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
export default router;
