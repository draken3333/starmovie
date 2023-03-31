import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

import "./assets/style/main.scss";
// Pages
import Intro from "./pages/Intro";
import Films from "./pages/Films";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Intro />,
      },
      {
        path: "/Movies",
        element: <Films />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
