import React, { useState, useEffect } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [nameValue, setNameValue] = useState("");
  const [descValue, setDescValue] = useState("");

  useEffect(() => {}, [descValue, nameValue]);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const formData = Object.fromEntries(new FormData(form));
    saveTodo(e, formData);
  };

  // Form input hanlder
  const handleInput = (e: React.FormEvent) => {
    const target = e.target as any;
    // console.log(target);
    target.name === "name"
      ? setNameValue(target.value)
      : setDescValue(target.value);
  };

  const isDisabled = (): boolean => {
    return nameValue && descValue ? false : true;
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <h1>My Todos</h1>
      <div>
        <input onInput={handleInput} type="text" name="name" />
        <textarea
          onInput={handleInput}
          name="description"
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit" disabled={isDisabled() ? true : false}>
          Save Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
