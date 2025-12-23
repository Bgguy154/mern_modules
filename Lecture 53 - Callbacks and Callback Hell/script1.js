const questionsData = [
  {
    statement: "What is Capital of India?",
    marks: 10,
    time: 15,
    options: ["New delhi", "Mumbai", "Bhatinda", "Punjab"],
    correctoption: 0,
  },
  {
    statement: "What is Capital of maharashtra?",
    marks: 20,
    time: 25,
    options: ["New delhi", "Mumbai", "Bhatinda", "Punjab"],
    correctoption: 1,
  },
];

let intervalId = null;

const qBox = document.querySelector("#q-box");
const aBox = document.querySelector("#a-box");
const timer = document.querySelector("#timer");
const nextBtn = document.querySelector("#next");

class Question {
  constructor(statement, marks, time) {
    this.statement = statement;
    this.marks = marks;
    this.time = time;
  }

  validate() {}

  display() {}

  startTimer() {
    if (intervalId) {
      clearInterval(intervalId);
    }

    let timeLeft = this.time;

    intervalId = setInterval(() => {
      timeLeft--;
      const min = Math.floor(timeLeft / 60);
      const sec = Math.floor(timeLeft % 60);

      timer.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        nextBtn.click();
      }
    }, 1000);
  }
}

class MCQQuestion extends Question {
  constructor(statement, marks, time, options, correctoption) {
    super(statement, marks, time);
    this.options = options;
    this.correctoption = correctoption;
    this.userAnswer = null;
  }

  validate() {
    return this.userAnswer == this.correctoption;
  }

  display() {
    qBox.textContent = this.statement;
    this.startTimer();
    aBox.innerHTML = "";
    this.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;

      button.addEventListener("click", () => {
        this.userAnswer = index;
      });
      aBox.appendChild(button);
    });
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currQuestionIndex = 0;
    this.score = 0;
    this.total = 0;
  }

  start() {
    this.questions[this.currQuestionIndex].display();
  }

  nextQuestion() {
    const currentquestion = this.questions[this.currQuestionIndex];
    if (this.questions.length - 1 == this.currQuestionIndex) {
      nextBtn.textContent = "Submit";
    }
    if (currentquestion.validate()) {
      this.score += currentquestion.marks;
    }
    this.currQuestionIndex++;
    this.questions[this.currQuestionIndex].display();
  }

  isFinished() {
    if (this.questions.length - 1 == this.currQuestionIndex) {
            const currentquestion = this.questions[this.currQuestionIndex];
            if(currentquestion.validate()){
                this.score+=currentquestion.marks;
            }
      return true;
    }
    return false;
  }
}

const questions = questionsData.map((q) => {
  const mcqQ = new MCQQuestion(q.statement, q.marks, q.time,q.options, q.correctoption);
  return mcqQ;
});

const quiz = new Quiz(questions);
quiz.start();

nextBtn.addEventListener("click", () => {
  if (quiz.isFinished()) {
    alert("Quiz is finished Score:" + quiz.score);
    return;
  }

  quiz.nextQuestion();
});
