import React, { useCallback, useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function SignUp() {
    const {SignUp}=useContext(AuthContext);

    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [message,setMessage]=useState("");

    function handleSubmit(){
      SignUp({name,email,password,phone});
      setMessage("Signup Done ✅")
    }
  return (
    <>
    <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}></input>
        <input type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></input>
    <input type='text' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}></input>
    <input type='number' placeholder='Enter _Phone' onChange={(e)=>setPhone(e.target.value)}></input>

    <button onClick={handleSubmit}>Submit</button>
    <p>{message}</p>
    </>

  )
}

export default SignUp