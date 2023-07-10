import React, { useState } from 'react';

import TodoList from './components/TodoList';
import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1
        style={{ fontSize: '4rem', fontWeight: '900', display: 'inline-block' }}
      >
        TODO
      </h1>
      <TodoList />
    </>
  );
}

export default App;
