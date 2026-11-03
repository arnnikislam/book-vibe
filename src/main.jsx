import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import BookProvider from "./context/BookContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </BookProvider>
  </StrictMode>,
);
