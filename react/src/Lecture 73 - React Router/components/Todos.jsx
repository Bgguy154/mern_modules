import React from 'react'
import { Link } from 'react-router-dom'

function Todos({ todos }) {

    return (
        <div>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <Link to={`/todos/${todo.id}`}>{todo.name}</Link>
                    </div>
                ))

            }
        </div>
    )
}

export default Todos