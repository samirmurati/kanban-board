import React from "react";

const Board = (props) => {
  return (
    <>
      <h1>Kanban board</h1>
      <div className="board kanban-board">{props.children}</div>
    </>
  );
};

export default Board;
