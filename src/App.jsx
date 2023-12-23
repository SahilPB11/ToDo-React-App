import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/task";

function App() {
  const [tasks, setTasks] = useState([]);
  // here i am saving the task in localstorage whenever the changes will happen
  useEffect(() => {
    if (!tasks) return;
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  // after refreh we are checking if tasks is present in localstorage show it
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  // this function for adding a new task
  function addTask(name) {
    setTasks((prevTasks) => {
      // If prevTasks is not an array or is undefined, so i initilise it empty array
      const currentTasks = Array.isArray(prevTasks) ? prevTasks : [];

      // And Add the new task to the current tasks array
      return [...currentTasks, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }
  return (
    <main>
      <TaskForm onAdd={addTask} />
      {Array.isArray(tasks) &&
        tasks.map((task, index) => (
          <div key={index}>
            <Task {...task} onToggle={(done) => updateTaskDone(index, done)} />
          </div>
        ))}
    </main>
  );
}

export default App;
