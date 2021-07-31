import React from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3>
            Moni<br></br>Todo App
          </h3>
        </header>
        <div className="App-section">
          <section className="Main-section">
            <Form />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
