
"use client";

import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(event) {
    event.preventDefault();

    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask.trim(),
        done: false,
      },
    ]);

    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tool-card" id="tasks">
      <div className="tool-heading">
        <span className="tool-icon">♡</span>
        <div>
          <p className="eyebrow">BEFORE WE GO</p>
          <h3>Our little to-do list</h3>
        </div>
      </div>

      <form className="add-task" onSubmit={addTask}>
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add something to remember..."
          aria-label="New task"
        />
        <button type="submit" aria-label="Add task">+</button>
      </form>

      <div className="check-list">
        {tasks.length === 0 && (
          <p className="empty-state">
            Add your first little task above.
          </p>
        )}

        {tasks.map((task) => (
          <div className="task-row" key={task.id}>
            <label className="check-row">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? "completed" : ""}>
                {task.text}
              </span>
            </label>

            <button
              type="button"
              className="delete-task"
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete ${task.text}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
