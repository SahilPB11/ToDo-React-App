import React from "react";
import ChexkBox from "./ChexkBox";

const Task = ({name,done}) => {
  return (
    <div className="task">
      <ChexkBox defaultChecked={done} />
      {name}
    </div>
  );
};

export default Task;
