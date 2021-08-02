import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')

  return (
    <div className="App">
      <header>
        <h4>Moni Todo List</h4>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos {...todos} />
    </div>
  )
}

export default App
