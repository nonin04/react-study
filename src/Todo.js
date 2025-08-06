import React from 'react'

const Todo = ({todo, toggleTodo}) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
      </label>
      {todo.name}</div>
  )
}

export default Todo