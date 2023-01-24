import React from "react";
import { TodoCounter } from "./components/TodoCounterDir/TodoCounter";
import { TodoSearch } from "./components/TodoSearchDir/TodoSearch";
import { TodoList } from "./components/TodoListDir/TodoList";
import { TodoItem } from "./components/TodoItemDir/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButtonDir/CreateTodoButton";
// import './App.css';

const DefaultTodos = [
  { text: "Learn Nuxt.js", completed: true },
  { text: "Learn React.js", completed: false },
  { text: "Learn more about CSS", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(DefaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if(!searchValue.length >= 1){
    searchedTodos = todos
  }else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  }


  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
