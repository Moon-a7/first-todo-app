import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoApp'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('
  ')
  return (
    <div className="App">
      <header>
        <h3>Moni's App</h3>
      </header>
      <Form></Form>
      <TodoList></TodoList>
    </div>
  )
}

export default App
