import React from "react";
import ChexkBox from "./ChexkBox";

const Task = ({ name, done, onToggle }) => {
  return (
    <div className={"task " + (done ? "done" : "")}>
      <ChexkBox checked={done} onClick={() => onToggle(!done)} />
      <span> {name}</span>
    </div>
  );
};

export default Task;
