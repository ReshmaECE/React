

// import React, { useState } from "react";
// import './App.css';
// import TodoForm from './Components/TodoForm';


// function App() {
// const [todos,setTodos]= useState([]);

// const  addTodo=(text)=>{
// let id=1
//   }
//   return (
//     <div className="todo-app">
//       <h1>ToDo List</h1>
//       <TodoForm addTodo={addTodo}/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
 import './App.css';
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/ToDoitem"

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <hr className="seperator" />
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </>
  );
}

export default TodoList;