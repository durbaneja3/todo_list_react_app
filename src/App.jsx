import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: 0,
    name: "",
  });
  const [isEditing, setIsEditing] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    const newArray = [...todos, todo];
    setTodos(newArray);
    setTodo({
      id: todos.length + 1,
      name: "",
    });
  }

  function updateForm(e) {
    e.preventDefault();
    const newArray = [...todos];
    const index = todos.findIndex((t) => t.id === selectedTodo.id);
    newArray.splice(index, 1, selectedTodo);
    setTodos(newArray);
    setIsEditing(false);
  }

  function updateTodo(todo) {
    setIsEditing(true);
    setSelectedTodo(todo);
  }

  function deleteTodo(todo) {
    const newArray = [...todos];
    const index = todos.findIndex((t) => t.id === todo.id);
    newArray.splice(index, 1);
    setTodos(newArray);
  }

  return (
    <div className="App">
      <Header />
      <TodoInput
        todo={todo}
        isEditing={isEditing}
        handleForm={handleForm}
        setTodo={setTodo}
        updateForm={updateForm}
        setSelectedTodo={setSelectedTodo}
        selectedTodo={selectedTodo}
      />
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
