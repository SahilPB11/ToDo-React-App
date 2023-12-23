import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/task";

// Define the main App component
function App() {
  // Create a state variable to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Use the useEffect hook to save the tasks in local storage whenever they change
  useEffect(() => {
    // Check if the tasks variable is not initialized or empty
    if (tasks.length == 0) return;
    // Convert the tasks array to a JSON string and store it in local storage
    else {
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Use the useEffect hook to check if there are any tasks stored in local storage and load them
  useEffect(() => {
    // Get the stored tasks from local storage and parse them back into an array
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    // If there are stored tasks, set the tasks state variable to the stored tasks
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  // Function to add a new task to the list
  function addTask(name) {
    setTasks((prevTasks) => {
      // Check if the previous tasks variable is an array, otherwise initialize it as an empty array
      const currentTasks = Array.isArray(prevTasks) ? prevTasks : [];

      // Add the new task to the array of current tasks
      return [...currentTasks, { name: name, done: false }];
    });
  }

  // Function to update the done status of a task
  function updateTaskDone(taskIndex, newDone) {
    // Update the tasks state variable by updating the done status of the task at the given index
    setTasks((prev) => {
      // Create a copy of the previous tasks array
      const newTasks = [...prev];
      // Update the done status of the task at the given index
      newTasks[taskIndex].done = newDone;
      // Return the updated tasks array
      return newTasks;
    });
  }

  // Function to remove a task from the list
  function removeTask(taskIndex) {
    // Update the tasks state variable by filtering out the task at the given index
    setTasks((prev) => {
      // Create a copy of the previous tasks array
      const newTasks = [...prev];

      // Filter out the task at the given index
      const filteredTasks = newTasks.filter(
        (taskObj, index) => index !== taskIndex
      );

      // Return the filtered tasks array
      return filteredTasks;
    });
  }

  // this function for remane the task
  function renameTask(index, newName) {
    // Update the tasks state variable by updating the name of the task at the given index
    setTasks((prev) => {
      // Create a copy of the previous tasks array
      const newTasks = [...prev];

      // Update the name of the task at the given index
      newTasks[index].name = newName;

      // Return the updated tasks array
      return newTasks;
    });
  }

  // Calculate the number of completed tasks and the total number of tasks
  const completeTaskCount = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  // Function to generate a message based on the completion percentage
  function getMessage() {
    // Calculate the percentage of completed tasks
    const percentage = (completeTaskCount / numberTotal) * 100;

    // Return a message based on the percentage
    if (percentage === 0) {
      return "Try to do at least one 🙏🏻";
    }
    if (percentage === 100) {
      return "Nice job for today! 🤴🏻";
    }
    return "keep it going 💪🏼";
  }

  // Return the JSX for the App component
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
            <Task
              {...task}
              onRename={(newName) => renameTask(index, newName)}
              onTrash={() => removeTask(index)}
              onToggle={(done) => updateTaskDone(index, done)}
            />
          </div>
        ))}
    </main>
  );
}

export default App;
