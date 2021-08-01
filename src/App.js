import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'
import Todo from './components/Todo'
import Todos from './components/Todo'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h4>Moni's Todo List</h4>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList />
      <Todo />
    </div>
  )
}

export default App
