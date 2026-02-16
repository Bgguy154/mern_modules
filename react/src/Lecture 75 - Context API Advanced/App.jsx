import { useContext } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import { AuthContext } from './context/AuthContext'

function App() {
  const { name, email } = useContext(AuthContext)

  return (
    <>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Signup</Link>
        <Link to="/logout">Logout</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default App
