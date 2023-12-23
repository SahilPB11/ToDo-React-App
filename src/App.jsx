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

  // here we are check or uncheck the task 
  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  // this is for removing the task 
  function removeTask(taskIndex){
    setTasks(prev => {
      return prev.filter((taskObj, index) => index !== taskIndex)
    })
  }

  // here we will find how many tasks has been completed .
  const completeTaskCount = tasks.filter((t) => t.done).length ;
  const numberTotal = tasks.length;
  function getMessage() {
    const percentage = completeTaskCount / numberTotal * 100;
    if (percentage === 0) {
      return "Try to do at least one 🙏🏻";
    }
    if(percentage === 100){
      return "Nice job for today! 🤴🏻"
    }
    return "keep it going 💪🏼";
  }
  return (
    <main>
      <h1>
        {completeTaskCount}/{numberTotal} Complete
      </h1>

      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {Array.isArray(tasks) &&
        tasks.map((task, index) => (
          <div key={index}>
            <Task {...task} onTrash={() => removeTask(index)} onToggle={(done) => updateTaskDone(index, done)} />
          </div>
        ))}
    </main>
  );
}

export default App;
