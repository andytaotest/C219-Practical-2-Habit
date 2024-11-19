import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName) return;
    onAddHabit(habitName);
    setHabitName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="New Habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        style={{
          padding: "10px",
          width: "calc(100% - 120px)",
          marginRight: "10px",
        }}
      />
      <button type="submit" style={{ padding: "10px 20px" }}>
        Add Habit
      </button>
    </form>
  );
}
