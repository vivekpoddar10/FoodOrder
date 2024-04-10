import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../component/Header";
import appStore from "../utils/appStore";

test("loaded all the element", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();
});

test("loaded all the element", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const linkRouter = screen.getAllByRole("link");
  expect(linkRouter.length).toBe(4);
});
