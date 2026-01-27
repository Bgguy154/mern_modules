import React, { useEffect, useState } from 'react'

function Timer() {
    let [time,setTime]=useState(60);
    useEffect(()=>{
      const intervalId=setInterval(()=>{
         setTime(prev=>prev-1);
      },1000)
      return()=>clearInterval(intervalId)
    },[])
  return (
    <>
      <div>{time}</div>
    </>
  )
}

export default Timer