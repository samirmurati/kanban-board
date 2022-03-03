import React, { useContext } from "react";
import { TaskContext } from "./store/task-context";

const Element = (props) => {
  const taskCtx = useContext(TaskContext);

  const taskClickHandler = (task) => {
    taskCtx.selectTask(task);
  };

  return props.tasks.map((item) => {
    return (
      <div
        className="kanban-task"
        key={item}
        onClick={() => {
          taskClickHandler(item);
        }}
      >
        {item}
      </div>
    );
  });
};

export default Element;
