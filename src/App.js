import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => { 
    getLocalTodos()
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = localStorage.setItem('todos', JSON.stringify(todos))
      setTodos(todoLocal) // BŁĘÐY !!!
    }
    function getLocalTodos() {} //wyżuc to
  }

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
        setStatus={setStatus}
      />
      <TodoList
        inputText={inputText}
        setInputText={setInputText}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}

export default App
