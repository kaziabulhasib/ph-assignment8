import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import BookDetails from "./Components/BookDetails/BookDetails";

import ListedBooks from "./Components/ListedBooks/ListedBooks";
import ReadList from "./Components/ReadList/ReadList";
import WishList from "./Components/WishList/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // Listed books tabs
      {
        path: "/listedbooks",
        element: (
          <div>
            <ListedBooks></ListedBooks>
            <ReadList></ReadList>
            <WishList></WishList>
          </div>
        ),
      },
      {
        path: "/pagesread",
        element: (
          <div>
            <h1 className='text-5xl text-center'>This is pages to read.</h1>
          </div>
        ),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
