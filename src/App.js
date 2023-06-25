import React, { useState } from 'react';

import TodoList from './components/TodoList';
import AddNewTodo from './components/AddNewTodo';

const SAVED_TODO = [
  {
    id: 'e1',
    title: 'Javascript',
    description: 'Study Vanilla JS'
  },
  {
    id: 'e2',
    title: 'Github',
    description: 'Update github readme file'
  },
  {
    id: 'e3',
    title: 'Laundry',
    description: 'Finish laundry by 5 pm'
  }
];

function App() {
  
  const[todos, setTodos] = useState(SAVED_TODO);

  const addTodoHandler = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    })
  };

  return (
    <div className="App">
      <h1>My practice todo app</h1>
      <AddNewTodo onAddTodo={addTodoHandler} />
      <TodoList dataSet={todos} />
    </div>
  );
};

export default App;
