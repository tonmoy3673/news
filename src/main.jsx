import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Category from "./components/Pages/Shared/Categories/Category.jsx";
import NewsLayout from "./components/Main/NewsLayout.jsx";
import NewsCard from "./components/Pages/News/NewsCard.jsx";
import AuthProvider from "./components/Context/AuthProvider.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import Register from "./components/Pages/Login/Register.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch("http://localhost:5000/news"),
      },

      {
        path: "/home",
        element: <Category />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
