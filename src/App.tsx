import React from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import "./App.css";

import { getTodos, addTodo, deleteTodo, updateTodo } from "./API";

const App: React.FC = () => {
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    // let savedTodo = await addTodo(formData);
    addTodo(formData).then(({ status, data }) => {
      console.log(status, data);
    });
  };

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo}></AddTodo>
    </main>
  );
};
export default App;
