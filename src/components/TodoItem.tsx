import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";
  const buttonStatus: string = todo.status
    ? "Card--button__incomplete"
    : "Card--button__done";

  return (
    <div className="Card">
      {/* Text in the card */}
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>

      {/* Buttons for manipulating card */}
      <div className="Card--button">
        <button className={buttonStatus} onClick={() => updateTodo(todo)}>
          {todo.status ? "Incomplete" : "Complete"}
        </button>
        <button
          className="Card--button__delete"
          onClick={() => {
            deleteTodo(todo._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
