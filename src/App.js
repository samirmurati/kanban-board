import { useContext } from "react";
import "./App.css";
import Board from "./components/Board";
import Controls from "./components/Controls";
import Stages from "./components/Stages";
import { TaskContext } from "./components/store/task-context";
import Element from "./components/Element";

function App() {
  const tasks = useContext(TaskContext).tasks;
  const todo = useContext(TaskContext).todo;
  const ongoing = useContext(TaskContext).ongoing;
  const done = useContext(TaskContext).done;

  return (
    <div>
      <Controls />
      <Board>
        <Stages name="Backlog">
          <Element tasks={tasks} />
        </Stages>
        <Stages name="To Do">
          <Element tasks={todo} />
        </Stages>
        <Stages name="Ongoing">
          <Element tasks={ongoing} />
        </Stages>
        <Stages name="Done">
          <Element tasks={done} />
        </Stages>
      </Board>
    </div>
  );
}

export default App;
