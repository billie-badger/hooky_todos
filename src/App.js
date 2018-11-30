import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button className="btn" onClick={() => completeTodo(index)}>
          &#10003;
        </button>
        <button className="btn" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        onChange={e => setValue(e.target.value)}
        placeholder="Add todo"
      />
      <button className="btn" type="submit">+</button>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React Hooks',
      isCompleted: false
    },
    {
      text: 'Learn about GraphQL',
      isCompleted: false
    },
    {
      text: 'Learn about Build Awesome Todo App',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Hooky Todos</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))} 
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App