import React from 'react'
import SignUp from './components/SignUp'
import Products from './components/Products'
import { Link } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'

function App1() {
  return (
    <>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App1