
import { useContext, useState } from 'react'
import { Link ,Routes} from 'react-router-dom';
import './App.css'
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import {useTheme,ThemeContext} from "./context/ThemeContext"

function App() {
 const [loggedIn,setLoggedIn]=useState(false);
//  const {toggleTheme,theme}=useTheme();
const {toggleTheme,theme}=useContext(ThemeContext)
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route 
        path="/"
        element={
        <ProtectedRoute loggedIn={loggedIn}>
            <Home/>
        </ProtectedRoute>}/>

        <Route
        path="/login"
        element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>

      {/* Nested Routes */}
      <Route path="/contact" element={<Dashboard/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
            </Routes>
    <p>Current Theme: {theme}</p>
    <button onClick={toggleTheme}>Toggle Theme</button>

    </>
  )
}

export default App
