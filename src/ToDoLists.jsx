import React from "react";

const ToDoLists = (props) => {
    return (
    <>
    <div className="todo-style">
        <i className="fas fa-times"
        onClick = {() => {
            props.onSelect(props.id);
        }} />
        <li> {props.text} </li>
    </div>
    </>
    );
}

export default ToDoLists;