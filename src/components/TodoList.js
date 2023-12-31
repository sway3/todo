import React, { useState } from 'react';

import Todo from './Todo';
import AddNewTodo from './AddNewTodo';
import EditTodo from './EditTodo';

import styled from 'styled-components';

import Card from './UI/Card';

const SAVED_TODO = [
  {
    id: 'e1',
    title: 'Javascript',
    date: '2021-08-01',
    isEditing: false,
  },
  {
    id: 'e2',
    title: 'Github',
    date: '2021-08-02',
    isEditing: false,
  },
  {
    id: 'e3',
    title: 'Laundry',
    date: '2021-08-03',
    isEditing: false,
  },
];

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList = () => {
  const [todos, setTodos] = useState(SAVED_TODO);

  const addTodoHandler = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const editTodoHandler = (todoId) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isEditing: true };
        }
        return todo;
      });
    });
  };

  const updateTodoHandler = (updatedTodo) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return { ...updatedTodo };
        }
        return todo;
      });
    });
  };

  return (
    <TodoWrapper>
      <AddNewTodo onAddTodo={addTodoHandler} />
      {todos.map((todo) => {
        return (
          <Card key={todo.id} width='400px'>
            {todo.isEditing ? (
              <EditTodo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                date={todo.date}
                onUpdateTodo={updateTodoHandler}
              />
            ) : (
              <Todo
                key={todo.id}
                title={todo.title}
                date={todo.date}
                onDelete={() => removeTodoHandler(todo.id)}
                onEdit={() => editTodoHandler(todo.id)}
              />
            )}
          </Card>
        );
      })}
    </TodoWrapper>
  );
};

export default TodoList;
