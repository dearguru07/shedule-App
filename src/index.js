import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Body from "./body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Mymeets from "./mymeet";
import Addmeet from "./addmeet";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
const ways = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/mymeets",
        element: <Mymeets />,
      },
      {
        path: "/addmeet",
        element: <Addmeet />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ways} />);
