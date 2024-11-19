import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: habit.completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          flexGrow: 1,
          textDecoration: habit.completed ? "line-through" : "none",
        }}
      >
        {habit.name}
      </span>
      <button
        onClick={() => onDeleteHabit(habit.id)}
        style={{
          padding: "5px 10px",
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}
