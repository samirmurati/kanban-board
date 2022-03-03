import React, { useState, useContext } from "react";
import { TaskContext } from "./store/task-context";

const Controls = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const taskCtx = useContext(TaskContext);

  const taskNameHandler = (event) => {
    const newTask = event.target.value;
    setNewTaskName(newTask);
  };

  const createTaskHandler = () => {
    taskCtx.setTask(newTaskName);
    setNewTaskName("");
  };

  // Move Forward Handler
  const moveForwardHandler = () => {
    taskCtx.moveForward();
  };
  // Move Backward Handler
  const moveBackHandler = () => {
    taskCtx.moveBack();
  };

  // Delete Task Handler
  const deleteTaskHandler = () => {
    taskCtx.deleteTask();
    taskCtx.selectTask("");
  };

  return (
    <div className="controls">
      <h1>Controls</h1>
      <div>
        <input
          type="text"
          placeholder="New task name"
          onChange={taskNameHandler}
          value={newTaskName}
        />

        <button onClick={createTaskHandler}>Create</button>
        <span className="taskMessage">{taskCtx.taskMessage}</span>
      </div>
      <div>
        <input
          name="selectedTask"
          type="text"
          placeholder="Selected task name"
          value={taskCtx.selectedTask}
        />
        <button onClick={moveBackHandler}>Move back</button>
        <button onClick={moveForwardHandler}>Move forward</button>
        <button onClick={deleteTaskHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Controls;
