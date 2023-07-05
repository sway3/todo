import React from "react";
import Button from "./UI/Button";

const Todo = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <Button color="black" background="yellow">
        edit
      </Button>
      <Button onClick={props.onDelete} color="white" background="blue">
        remove
      </Button>
    </div>
  );
};

export default Todo;
