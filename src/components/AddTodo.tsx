import React from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as any;
        const formData = new FormData(form);
        let obj = Object.fromEntries(new FormData(form));
        console.log(obj);
      }}
      className="Form"
    >
      <h1>My Todos</h1>
      <div>
        <input type="text" name="name" />
        <textarea name="description" cols={30} rows={10}></textarea>
        <button type="submit">Save Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;
