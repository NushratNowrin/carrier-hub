import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./Layout/Header";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
