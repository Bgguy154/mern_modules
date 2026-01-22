import React from 'react'
import Options from './Options'
import '../css/question.css'

const Question = ({ questions, onOptionClick, selectedAnswer }) => {
  return (
    <div className="quiz-container">
      <h1 className="quiz-question">{questions.question}</h1>

      {questions.options.map((opt, index) => (
        <Options
          key={index}
          opt={opt}
          onClick={() => onOptionClick(opt)}
          isSelected={selectedAnswer === opt}
        />
      ))}
    </div>
  )
}

export default Question
