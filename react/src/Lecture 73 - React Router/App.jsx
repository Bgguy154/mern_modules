import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Todos from './components/Todos'
import Todo from './components/Todo'
import Addtodo from './components/Addtodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Tanmay", description: "SDE" },
    { id: 2, name: "Rounak", description: "Electrical" },
    { id: 3, name: "Aman", description: "Business" },
  ])

  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 32px',
          backgroundColor: '#1f2937',
          width:"90vw"
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500'
            }}
          >
            Todos
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginRight:'10px',
          }}
        >
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Home
          </Link>

          <Link
            to="/add"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Add Todo
          </Link>
        </div>
      </nav>

      <div
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '40px'
        }}
      >
        {/* <route path="/" element={<Todos todos={todos} />}></route> */}
        <Routes>
          <Route path="/" element={<Todos todos={todos} />} />
          <Route path="/add" element={<Addtodo todos={todos} setTodos={setTodos} />} />
          <Route path="/todos/:id" element={<Todo todos={todos} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
