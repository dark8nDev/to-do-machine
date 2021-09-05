import React from "react";

import { AppUI } from "./AppUI";

const defaultTodos = [
  {
    text: "Aprender React",
    completed: true,
  },
  {
    text: "Repasar inglés",
    completed: false,
  },
  {
    text: "Hacer streaming",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = true;
    setTodos(updatedTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);
    setTodos(updatedTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;