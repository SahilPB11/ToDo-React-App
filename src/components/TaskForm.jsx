import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  function hadleSubmit(e) {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={hadleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Your next Task"
      />
    </form>
  );
};

export default TaskForm;
