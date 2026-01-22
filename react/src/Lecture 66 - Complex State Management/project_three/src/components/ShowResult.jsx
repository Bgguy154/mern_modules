import React from 'react'
import '../css/showresult.css'

function ShowResult({ score, total }) {
  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Completed 🎉</h1>
      <p className="result-score">
        Your Score: {score} / {total}
      </p>
      <p className="result-message">
        {score === total
          ? "Excellent! Perfect score 💯"
          : score >= total / 2
          ? "Good job! Keep practicing 👍"
          : "Don’t worry, practice makes perfect 💪"}
      </p>
    </div>
  )
}

export default ShowResult
