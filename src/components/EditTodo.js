import React, { useState } from "react";

import InputBox from "./UI/InputBox";
import Button from "./UI/Button";

const EditTodo = (props) => {
  const [newTitle, setNewTitle] = useState(props.title);
  const [newDate, setNewDate] = useState(props.date);

  const newTitleChangeHandler = (event) => {
    console.log(event.target.value);
    setNewTitle(event.target.value);
  };

  const newDateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const todoUpdateHandler = (event) => {
    event.preventDefault();

    const updatedTodo = {
      id: props.id,
      title: newTitle,
      date: newDate,
      isEditing: false,
    };

    props.onUpdateTodo(updatedTodo);

    console.log(updatedTodo);

    setNewTitle("");
    setNewDate("");
  };

  return (
    <>
      <form onSubmit={todoUpdateHandler}>
        <InputBox
          type="text"
          value={newTitle}
          onChange={newTitleChangeHandler}
          width="300px"
          height="40px"
        />
        <InputBox
          type="date"
          value={newDate}
          onChange={newDateChangeHandler}
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
