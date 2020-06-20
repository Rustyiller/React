import React from 'react'


function TodoItem(props){

    const doneStyles = {
        textDecoration: "line-through",
        color: "#cdcdcd"
    }


    return(
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} 
            />
            <p style={props.item.completed ? doneStyles : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem