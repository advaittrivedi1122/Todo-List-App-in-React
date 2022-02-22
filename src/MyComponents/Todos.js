import React from 'react'
import {TodoItem} from "./TodoItem";

// rafc = react arrow function component
export const Todos = ({todos,onDelete}) => {

    let myStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }

    return (
        <div className="container my-3" style={myStyle}>
            <br /><br />
            <h3 >Todos List</h3>
            {todos.length===0?"No Todos to display":
                todos.map((todo)=>{
                    // key is an react attribute used to uniquely identify array elements
                    return <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />
                })
            }
        </div>
    )
}
