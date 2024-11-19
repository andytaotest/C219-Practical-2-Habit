import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App";

describe("Habit Tracker App", () => {
  // AddHabitForm Tests
  test("adds a new habit", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Habit/i);
    const button = screen.getByText(/Add Habit/i);

    fireEvent.change(input, { target: { value: "Exercise" } });
    fireEvent.click(button);

    expect(screen.getByText(/Exercise/i)).toBeInTheDocument();
  });

  test("prevents adding an empty habit", () => {
    render(<App />);
    const button = screen.getByText(/Add Habit/i);

    fireEvent.click(button);

    expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();
  });

  // HabitList and Habit Tests
  test("renders a list of habits", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Habit/i);
    const button = screen.getByText(/Add Habit/i);

    fireEvent.change(input, { target: { value: "Exercise" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Meditate" } });
    fireEvent.click(button);

    expect(screen.getByText(/Exercise/i)).toBeInTheDocument();
    expect(screen.getByText(/Meditate/i)).toBeInTheDocument();
  });

  test("marks a habit as completed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Habit/i);
    const button = screen.getByText(/Add Habit/i);

    fireEvent.change(input, { target: { value: "Read a book" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText(/Read a book/i)).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  test("unmarks a completed habit", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Habit/i);
    const button = screen.getByText(/Add Habit/i);

    fireEvent.change(input, { target: { value: "Read a book" } });
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox); // Mark as completed
    fireEvent.click(checkbox); // Unmark

    expect(screen.getByText(/Read a book/i)).not.toHaveStyle(
      "text-decoration: line-through"
    );
  });

  test("deletes a habit", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/New Habit/i);
    const button = screen.getByText(/Add Habit/i);

    fireEvent.change(input, { target: { value: "Meditate" } });
    fireEvent.click(button);

    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Meditate/i)).not.toBeInTheDocument();
  });
});
