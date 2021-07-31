import React from 'react'
//const Form: () => JSX.Element
const Form = () => {
  return (
    <div className="Main-form">
      <form>
        <input type="text" className="todo-input"></input>
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select name="todos" className="filter-todo"></select>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </div>
      </form>
    </div>
  )
}

export default Form
