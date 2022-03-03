import React, { useState } from "react";

export const TaskContext = React.createContext({
  tasks: [],
  todo: [],
  ongoing: [],
  done: [],
  taskMessage: "",
  selectedTask: "",
  setTask: (task) => {},
  setToDos: () => {},
  setDone: () => {},
  selectTask: (task) => {},
  moveForward: () => {},
  moveBack: () => {},
  deleteTask: () => {},
});

const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [done, setDone] = useState([]);
  const [taskMessage, setTaskMessage] = useState();
  const [selectedTask, setSelectedTask] = useState();

  console.log(selectedTask);

  const setTask = (task) => {
    const findTask =
      tasks.find((taskInArr) => taskInArr === task) ||
      todo.find((taskInArr) => taskInArr === task) ||
      ongoing.find((taskInArr) => taskInArr === task) ||
      done.find((taskInArr) => taskInArr === task);
    if (findTask) {
      setTaskMessage(`${task} Exist please enter new Task`);
      return;
    }
    setTasks((prevValue) => [...prevValue, task]);
    setTaskMessage("");
  };

  const selectTask = (task) => {
    setSelectedTask(task);
  };

  // Move Forward Handler
  const moveForward = () => {
    if (tasks.includes(selectedTask)) {
      setTodo((prevValue) => [...prevValue, selectedTask]);
      setTasks((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (todo.includes(selectedTask)) {
      setOngoing((prevValue) => [...prevValue, selectedTask]);
      setTodo((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (ongoing.includes(selectedTask)) {
      setDone((prevValue) => [...prevValue, selectedTask]);
      setOngoing((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
  };
  // Move Backward Handler
  const moveBack = () => {
    if (todo.includes(selectedTask)) {
      setTasks((prevValue) => [...prevValue, selectedTask]);
      setTodo((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (ongoing.includes(selectedTask)) {
      setTodo((prevValue) => [...prevValue, selectedTask]);
      setOngoing((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (done.includes(selectedTask)) {
      setOngoing((prevValue) => [...prevValue, selectedTask]);
      setDone((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
  };
  // Delete task Handler
  const deleteTask = () => {
    if (tasks.includes(selectedTask)) {
      setTasks((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (todo.includes(selectedTask)) {
      setTodo((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (ongoing.includes(selectedTask)) {
      setOngoing((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
    if (done.includes(selectedTask)) {
      setDone((prevValue) => {
        return prevValue.filter((task) => task !== selectedTask);
      });
    }
  };

  const taskContext = {
    tasks,
    todo,
    ongoing,
    done,
    setTask,
    taskMessage,
    selectedTask,
    selectTask,
    moveForward,
    moveBack,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
