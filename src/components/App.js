import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const handleToggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} />
      <HabitList
        habits={habits}
        onToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        {habits.length === 0
          ? "No habits added yet."
          : `You have ${habits.length} habit(s), ${
              habits.filter((habit) => habit.completed).length
            } completed today.`}
      </footer>
    </div>
  );
}

export default App;
