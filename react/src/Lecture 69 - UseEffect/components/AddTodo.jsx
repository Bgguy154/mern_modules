import React, { useEffect, useState } from "react";

function AddTodo({ todos, setTodos }) {
    const [input, setInput] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/todos?limit=10")
            .then((res) => res.json())
            .then((data) => {
                setTodos([...todos, ...data.todos.map((item) => {
                    return item.todo;
                })]);
            });
    }, []);

    const addTodoHandler = () => {
        if (!input.trim()) return;


        localStorage.setItem("todo", JSON.stringify(todos.map((item) => ({"todos":item}))));

        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <>
            <input
                type="text"
                placeholder="Add todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button style={{ marginLeft: "20px" }} onClick={addTodoHandler}>Add Todo</button>
        </>
    );
}

export default AddTodo;
