import React, { useState } from 'react'
import Buttons from './Buttons';
import Div from './Div';
// import "../App.css"

function LiftingStateUp() {
    const [count,setCount]=useState(0);
  return (
    <>
    <Buttons setCount={setCount} count={count} />
    <Div count={count} setCount={setCount}/>
    </>
  )
}

export default LiftingStateUp