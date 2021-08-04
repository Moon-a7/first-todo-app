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
    filterHandler()
    saveLocalTodos()
  }, [todos, status])
  /*filterHandler() => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed))
          break;
          case 'uncompleted':
            setFilteredTodos(todos.filter((todo) => todo.completed))
          break;
      }
    }
    */

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
    if (localStorage.getItems('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }

  function getLocalTodos() {}

  return (
    <div className="App">
      <header>
        <h4>Moni Todo List</h4>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />

      <TodoList
        setInputText={setInputText}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}

export default App
