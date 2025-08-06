import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
import './App.css';
import {v4 as uuidv4} from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();
  const handleAddTodo= () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    const id = uuidv4()
    console.log(name)
    console.log("保存されたUUID:", id);

    setTodos((prevTodos) => {
      if (name === "") return;
      return [...prevTodos, {id: id, name: name, completed: false }]
    });
    todoNameRef.current.value = null;
  }

  const handleDeleteTodo= () => {
    const newTodos = todos.filter((todo)  => !todo.completed);
    setTodos(newTodos)
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos)
  };


  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}/>
      <button type="submit" onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクを削除</button>
      <div>残りのタスク:{todos.filter((todo) => ( !todo.completed)).length}</div>

    </>
  );  
}

export default App;