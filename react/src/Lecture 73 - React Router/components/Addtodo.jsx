import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Addtodo({ todos, setTodos }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();

    function addTodo() {
        const newTodo = {
            id: todos.length + 1,
            name,
            description
        }

        setTodos([...todos, newTodo])
        setName("")
        setDescription("")
        navigate("/");
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px',
                    gap: '20px'
                }}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    style={{ width: "180px", height: "100px",border:"1px solid black",borderRadius:"5%" }}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />

                <button onClick={addTodo}>Add todo</button>
            </div>
        </>
    )
}

export default Addtodo
