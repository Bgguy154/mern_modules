import React from 'react'

function Options({ opt, onClick, isSelected }) {
  return (
    <button
      className={`option-btn ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      // disabled={isSelected}
    >
      {opt}
    </button>
  )
}

export default Options
