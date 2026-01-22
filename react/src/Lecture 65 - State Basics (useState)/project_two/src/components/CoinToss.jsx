import React from 'react'
import { useState } from 'react'

const CoinToss = () => {
    const [tossresult,setTossresult]=useState(true);
    function tossCoin(){
        let result=Math.floor(Math.random()*2);
        setTossresult(result);
    }
  return (
    <>
    <h1>Click for tossing the coin</h1>
    <button onClick={tossCoin}>Click to Toss</button>
    <p>{tossresult}</p>
    </>
  )
}

export default CoinToss