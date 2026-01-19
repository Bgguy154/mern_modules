import React from 'react'
import '../css/card.css'

const Card = ({theme}) => {
  return (
    <div className={theme}>ClassTheme : {theme}</div>
  )
}

export default Card