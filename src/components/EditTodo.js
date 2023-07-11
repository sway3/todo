import React, { useState } from 'react';

import styled from 'styled-components';

import InputBox from './UI/InputBox';
import Button from './UI/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

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

    setNewTitle('');
    setNewDate('');
  };

  return (
    <StyledForm onSubmit={todoUpdateHandler}>
      <InputBox type='text' value={newTitle} onChange={newTitleChangeHandler} />
      <InputBox type='date' value={newDate} onChange={newDateChangeHandler} />
      <Button type='submit' color='black' background='yellow'>
        Update
      </Button>
    </StyledForm>
  );
};

export default EditTodo;
