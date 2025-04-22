import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("renders the portfolio heading", () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hi, i'm marvin/i });
  expect(heading).toBeInTheDocument();
});

test("renders the GitHub link", () => {
  render(<App />);
  const githubLink = screen.getByRole('link', { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/MarvinKe1');
});