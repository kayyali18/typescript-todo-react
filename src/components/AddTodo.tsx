import React, { useState, useEffect } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");

  // Use Effect for re-rendering on Form input - watched for description and name of Todo
  useEffect(() => {}, [descValue, nameValue]);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const formData = Object.fromEntries(new FormData(form));

    saveTodo(e, formData);
  };

  // Form input handler
  const handleInput = ({ target: { value, name } }: React.BaseSyntheticEvent) =>
    name === "name" ? setNameValue(value) : setDescValue(value);

  // Form submit button
  const isDisabled = (): boolean => (nameValue && descValue ? false : true);

  return (
    <form onSubmit={handleSubmit} className="Form">
      <h1>My Todos</h1>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onInput={handleInput} type="text" name="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onInput={handleInput} name="description"></input>
        </div>
        <button type="submit" disabled={isDisabled() ? true : false}>
          Save Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
