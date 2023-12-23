import React from "react";
import ChexkBox from "./ChexkBox";

const Task = ({ name, done, onToggle }) => {
  return (
    <div className="task">
      <ChexkBox checked={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  );
};

export default Task;
