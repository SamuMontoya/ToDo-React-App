import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const onClickButton = () => {
        alert('You have clicked the button')
    }

  return <button className="CreateTodoButton" onClick={onClickButton}>+</button>;
}

export { CreateTodoButton };
