import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Error from "./component/Error";

const root = ReactDOM.createRoot(document.querySelector("body"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
<Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
     
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
