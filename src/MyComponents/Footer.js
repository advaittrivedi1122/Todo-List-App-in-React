import React from 'react'

// rafc = raect arrow function component
export const Footer = () => {
    let footerStyle = {
        position : "relative",
        top : "21vh",
        width : "100%"
    }
    return (
        <div className="bg-dark text-light text-center py-3">
            Copyright &copy; MyTodosList.com
        </div>
    )
}
