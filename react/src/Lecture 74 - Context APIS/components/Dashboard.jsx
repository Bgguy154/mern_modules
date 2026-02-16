import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <nav>
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/about">About</Link>
        <Link to="/dashboard/contact">Contact</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Dashboard