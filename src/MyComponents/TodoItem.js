import React from 'react'

// rafc = react arrow function components
export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="card my-3">
        <h5 className="card-header">{todo.sno}</h5>
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button className="btn btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
      </div>
    )
}
