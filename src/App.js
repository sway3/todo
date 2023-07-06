import React, { useState } from "react";

import TodoList from "./components/TodoList";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1 style={{ fontSize: "8rem", fontWeight: "900" }}>TODO</h1>
      <TodoList />
    </>
  );
}

export default App;
