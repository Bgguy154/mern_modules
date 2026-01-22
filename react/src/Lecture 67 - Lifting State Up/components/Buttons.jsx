import React from 'react';
import "../css/liftUp.css"


function Buttons({ setCount,count }) {
  return (
    <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
      <button  style={{color:"black",backgroundColor:"white",height:"50px",width:"100px"}} onClick={() => setCount(count+1)}>1</button>
      <button  style={{color:"black",backgroundColor:"white",height:"50px",width:"100px"}} onClick={() => setCount(count+2)}>2</button>
      <button  style={{color:"black",backgroundColor:"white",height:"50px",width:"100px"}}onClick={() => setCount(count+3)}>3</button>
    </div>
  );
}

export default Buttons;
