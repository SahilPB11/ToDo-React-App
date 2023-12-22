import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/task";

function App() {
  const [tasks, setTasks] = useState([]);

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
