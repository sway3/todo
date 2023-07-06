import React, { useState } from "react";

import InputBox from "./UI/InputBox";
import Button from "./UI/Button";

const EditTodo = (props) => {
  const [newTitle, setNewTitle] = useState("");

  const newTitleChangeHandler = (event) => {
    console.log(event.target.value);
    setNewTitle(event.target.value);
  };

  const todoUpdateHandler = (event) => {
    event.preventDefault();

    const updatedTodo = {
      id: props.id,
      title: newTitle,
      date: props.date,
      isEditing: false,
    };

    props.onUpdateTodo(updatedTodo);

    console.log(updatedTodo);

    setNewTitle("");
  };

  return (
    <>
      <form onSubmit={todoUpdateHandler}>
        <InputBox
          type="text"
          onChange={newTitleChangeHandler}
          width="300px"
          height="40px"
        />
        <Button type="submit" color="black" background="yellow">
          Update
        </Button>
      </form>
    </>
  );
};

export default EditTodo;
