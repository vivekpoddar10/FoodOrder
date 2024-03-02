import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Error from "./component/Error";


const root = ReactDOM.createRoot(document.querySelector("body"));

//lazy loading / dynamic import/ code chunking/ code spiting
const About = lazy(() => import("./component/About"));
const Restaurant = lazy(() => import('./component/Restaurant'))

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
        element: (
          <Suspense fallback={<h1>Loading about page</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading restaurant page</h1>}>
            <Restaurant/>
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
