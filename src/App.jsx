import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/task";

function App() {
  const [tasks, setTasks] = useState([]);
  // here i am saving the task in localstorage whenever the changes will happen
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  // after refreh we are checking if tasks is present in localstorage show it
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem(tasks)));
  }, []);

  // this function for adding a new task
  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }
  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <div key={i}>
          <Task {...task} />
        </div>
      ))}
    </main>
  );
}

export default App;
