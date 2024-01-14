import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main.jsx";

import Category from "./components/Pages/Shared/Categories/Category.jsx";
import NewsLayout from "./components/Main/NewsLayout.jsx";
import News from "./components/Pages/News/News.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Main />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: () => fetch("http://localhost:5000/news"),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
