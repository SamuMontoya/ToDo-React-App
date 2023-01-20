import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onCompleted = () => {
    alert("You have completed the " + props.text + " ToDo");
  };
  const onDeleted = () => {
    alert("You have deleted the " + props.text + " ToDo");
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onCompleted}
      >
        ✓
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDeleted}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
