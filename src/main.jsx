import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Component/Home.jsx/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "nyontek",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
