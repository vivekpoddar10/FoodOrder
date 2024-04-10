import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../component/Contact";

test("contact component should be loaded", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("button is loaded in the contact component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should load a input with placeholder name", () => {
  render(<Contact />);
  const placeholder = screen.getByPlaceholderText("name");
  expect(placeholder).toBeInTheDocument();
});

test("2 inputs", () => {
  render(<Contact />);
  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});
