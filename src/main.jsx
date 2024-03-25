import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/listedbooks",
        element: (
          <div>
            <h1 className='text-5xl text-center'>This is listed books.</h1>
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
