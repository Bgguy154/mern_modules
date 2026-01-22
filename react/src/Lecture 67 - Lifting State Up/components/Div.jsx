import React from 'react'
// import "../css/liftUp.css"

function Div({count}) {
  return (
    <>
    <div style={{height:"80vh",width:"80vw",display:"flex",gap:"10px",marginTop:"20px", backgroundColor:"skyblue"}}>
       {
    //   {Array.from({ length: count }).map((_, index) => (
        //alternative
        new Array(count).fill(0).map((item,index)=>{
          return(
          <div
          key={index}
          style={{
            width:"50px",
            height:"50px",
            backgroundColor:"yellow",
            border:"1px solid black",
            display:"inline-block",
            marginRight:"10px"
          }}/>
        )})
       } 
    </div>
    </>
  )
}

export default Div