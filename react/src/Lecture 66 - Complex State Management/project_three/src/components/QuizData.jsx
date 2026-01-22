import React, { useState } from 'react'
import Question from './Question'
import ShowResult from './ShowResult'

function QuizData() {
  const quiz = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctanswer: "Hyper Text Markup Language"
    },
    {
      question: "Which data structure uses FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      correctanswer: "Queue"
    },
    {
      question: "Which method is used to parse a JSON string in JavaScript?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.decode()"
      ],
      correctanswer: "JSON.parse()"
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "static"],
      correctanswer: "const"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correctanswer: "O(log n)"
    }
  ];

  const [currIdx, setCurrIdx] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(quiz.length).fill(null));

  function handleOptionClick(option) {

    const newAnswers = [...answers];
    newAnswers[currIdx] = option;
    setAnswers(newAnswers);
  }

  function handleSubmit(){
    let finalScore=0;
    answers.forEach((ans,index)=>{
      if(ans==quiz[index].correctanswer){
        finalScore++;
      }
    });
    setScore(finalScore);
    setCompleted(true);
  }


  if (completed) {
    return <ShowResult score={score} total={quiz.length} />;
  }

  return (
    <div>

      <Question
        questions={quiz[currIdx]}
        onOptionClick={handleOptionClick}
        selectedAnswer={answers[currIdx]}
      />

      <button disabled={currIdx === 0} onClick={() => setCurrIdx(currIdx - 1)}>
        Prev
      </button>

      {currIdx < quiz.length - 1 ? (
        <button onClick={() => setCurrIdx(currIdx + 1)}>
          Next
        </button>
      ) : (
        <button onClick={handleSubmit}>
          Submit Quiz
        </button>
      )}
    </div>
  );
}

export default QuizData;
