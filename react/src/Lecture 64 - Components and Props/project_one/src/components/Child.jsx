import React from 'react'

const Child = ({name,relation}) => {
  return (
    <>
    <h3>I am GrandChild of {name} and I am {relation}</h3>
    </>
  )
}

export default Child