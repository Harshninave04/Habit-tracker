const addHabits = document.querySelector(".add-habit");
const habitsList = document.querySelector(".habits");
const habits = [];

// Add a Habit

function addHabit(e) {
  e.preventDefault();
  const text = this.querySelector("[name=habit]").value;
  const totalCounts = this.querySelector("[name=reps]").value;
  const timeframe = this.querySelector("[name=timeframe]").value;
  const habit = {
    text: text,
    totalCounts: totalCounts,
    timeframe: timeframe,
    completed: false,
  };

  habits.push(habit);
  console.log(habit);
}

// List Habit

addHabits.addEventListener("submit", addHabit);
