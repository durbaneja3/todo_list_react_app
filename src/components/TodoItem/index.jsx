import React from "react";

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  return (
    <div className="Todo">
      <p>{todo.name}</p>
      <div className="Todo-btns">
        <button onClick={() => updateTodo(todo)}>Update</button>
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    </div>
  );
}
