import React, { useState } from "react";

import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";
import GlobalStyle from "./styles/Global";

const SAVED_TODO = [
  {
    id: "e1",
    title: "Javascript",
    date: "2021-08-01",
  },
  {
    id: "e2",
    title: "Github",
    date: "2021-08-02",
  },
  {
    id: "e3",
    title: "Laundry",
    date: "2021-08-03",
  },
];

function App() {
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

  return (
    <>
      <GlobalStyle />
      <h1 style={{ fontSize: "8rem", fontWeight: "900" }}>TODO</h1>
      <AddNewTodo onAddTodo={addTodoHandler} />
      <TodoList onRemoveTodo={removeTodoHandler} dataSet={todos} />
    </>
  );
}

export default App;
