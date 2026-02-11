import React from 'react'
import { useParams } from 'react-router-dom'

function Todo({ todos }) {
    const { id } = useParams();
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px'
                }}
            >
                <h1>{todos[id - 1].name}</h1>
                <p>{todos[id - 1].description}</p>
            </div>

        </>
    )
}

export default Todo