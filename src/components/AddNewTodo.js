import React, { useState } from 'react';

import Button from './UI/Button';
import InputBox from './UI/InputBox';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddNewTodo = (props) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isValid, setIsValid] = useState(true);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const TODO = {
      id: Math.random().toString(),
      title: title,
      date: date,
    };

    console.log(TODO);

    props.onAddTodo(TODO);

    setTitle('');
    setDate('');
  };

  return (
    <StyledForm onSubmit={todoSubmitHandler}>
      <InputBox
        type='text'
        value={title}
        placeholder='Title'
        onChange={titleChangeHandler}
        width='300px'
        height='40px'
      />
      <InputBox
        type='date'
        value={date}
        onChange={dateChangeHandler}
        width='300px'
        height='40px'
      />
      <Button type='submit'>Submit</Button>
    </StyledForm>
  );
};

export default AddNewTodo;
