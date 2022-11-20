import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import ErrorPage from "./pages/ErrorPage";
import Routes from "./pages/Routes";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <Routes></Routes>
  </React.StrictMode>
);
