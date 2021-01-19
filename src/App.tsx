import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import "./App.css";

import { getTodos, addTodo, deleteTodo, updateTodo } from "./API";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (): Promise<void> => {
    try {
      let fetchedTodos = (await getTodos()).data.todos;
      setTodos(fetchedTodos);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSaveTodo = async (
    e: React.FormEvent,
    formData: ITodo
  ): Promise<void> => {
    const res = await addTodo(formData);
    const { status, data } = res;

    setTodos([...data.todos]);
    console.log(status, data);
  };

  const handleDeleteTodo = async (id: string) => {
    const todo: ITodo = todos.find((t) => t._id === id) as ITodo;
    const res = await deleteTodo(todo);

    setTodos(res.data.todos);
  };

  const handleUpdateTodo = (todo: ITodo) => {
    console.log("hey update");
  };

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo}></AddTodo>
      {
        // Iterate over every todo
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
          />
        ))
      }
    </main>
  );
};
export default App;
