import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h3>Moni's Todo List</h3>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}

export default App
