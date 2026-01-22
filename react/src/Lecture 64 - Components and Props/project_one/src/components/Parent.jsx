import React from 'react'
import Child from './Child'
import Child2 from './Child2'

const Parent = ({name}) => {
  const relation="grandson"
  return (
    <>
    <h3>I am child of {name}</h3>
    <Child name={name} relation={relation}/>
    <Child2 name={name} relation={"granddaughter"}/>
    </>
  )
}

export default Parent