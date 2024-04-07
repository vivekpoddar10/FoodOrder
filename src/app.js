import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Error from "./component/Error";
import appStore from "./utils/appStore";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.querySelector("body"));

//lazy loading / dynamic import/ code chunking/ code spiting
const About = lazy(() => import("./component/About"));
const Restaurant = lazy(() => import("./component/Restaurant"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("Vivek Poddar");
  }, []);

  return (
    <div>
      <Provider store={appStore}>
        {/*context availability */}
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
        <Footer />
      </Provider>
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
            <Restaurant />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
