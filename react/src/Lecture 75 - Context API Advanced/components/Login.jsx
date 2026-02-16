import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {
    const {Login}=useContext(AuthContext);

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    function handleLogin(){
      const success = Login({email,password});

    if(success){
      setMessage(`Hello ${email} 👋`);   // ✅ show greeting
    }
    }
  return (
    <>
        <input type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></input>
    <input type='text' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}></input>

    <button onClick={handleLogin}>Submit</button>
    <p>{message}</p>
    </>
  )
}

export default Login