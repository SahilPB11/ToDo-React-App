import React, { useState } from "react";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  return (
    <form action="">
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
