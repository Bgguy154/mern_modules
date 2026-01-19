import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
    const name="Ramdas"
  return (
    <>
    <h3>I am {name}</h3>
    <Parent name={name}/>
    </>
  )
}

export default GrandParent