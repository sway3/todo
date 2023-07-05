import React from "react";
import Button from "./UI/Button";

const Todo = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <Button onClick={props.onEdit} color="black" background="yellow">
        edit
      </Button>
      <Button onClick={props.onDelete} color="white" background="blue">
        remove
      </Button>
    </>
  );
};

export default Todo;
