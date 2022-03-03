import React from "react";

const Stages = (props) => {
  return (
    <div className="kanban-board">
      <div className="kanban-stage">
        <h3>{props.name}</h3>
        {props.children}
      </div>
    </div>
  );
};

export default Stages;
