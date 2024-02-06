import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <Body />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

root.render(<RouterProvider router={router} />);
