import React from "react";

export default function TodoInput({
  isEditing,
  handleForm,
  setTodo,
  todo,
  updateForm,
  setSelectedTodo,
  selectedTodo,
}) {
  return (
    <>
      {!isEditing ? (
        <form onSubmit={handleForm}>
          <input
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            placeholder="Enter todo"
          />
          <button>Submit</button>
        </form>
      ) : (
        <form onSubmit={updateForm}>
          <input
            value={selectedTodo.name}
            onChange={(e) =>
              setSelectedTodo({ ...selectedTodo, name: e.target.value })
            }
            placeholder="Update todo"
          />
          <button>Submit</button>
        </form>
      )}
    </>
  );
}
