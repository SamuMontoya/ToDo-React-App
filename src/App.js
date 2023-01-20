import React from "react";
import { TodoCounter } from "./components/TodoCounterDir/TodoCounter";
import { TodoSearch } from "./components/TodoSearchDir/TodoSearch";
import { TodoList } from "./components/TodoListDir/TodoList";
import { TodoItem } from "./components/TodoItemDir/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButtonDir/CreateTodoButton";
// import './App.css';

const todos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso de React", completed: false },
  { text: "Llorar con la Llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
