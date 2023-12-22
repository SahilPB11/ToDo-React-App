import React from "react";
import ChexkBox from "./ChexkBox";

const Task = () => {
  return (
    <div className="task">
      <ChexkBox defaultChecked={true} />
      test task
    </div>
  );
};

export default Task;
