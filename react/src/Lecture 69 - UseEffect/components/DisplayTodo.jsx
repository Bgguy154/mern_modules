import React from "react";

function DisplayTodo({ todos }) {

    return (
        <>
            <h3>Todo List</h3>
            {todos.length === 0 && <p>No todos yet</p>}

            {todos.map((item, idx) => {
                return (
                <div  key={idx}>
                <ul>
                 <li style={{textAlign:"left"}}>{item}</li>
                </ul>
                </div>
            )})}
        </>
    );
}

export default DisplayTodo;
