import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Logout() {
    const {Logout}=useContext(AuthContext);
  return (
        <button onClick={()=>Logout()}>Logout</button>
  )
}

export default Logout