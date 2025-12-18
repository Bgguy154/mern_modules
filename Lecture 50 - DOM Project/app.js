class Questions {
  constructor({ id, text, options, correctOption, type }) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.correctOption = correctOption;
    this.type = type;
  }
}

const questions = [
  new Questions({
    id: 1,
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctOption: 1,
    type: "mcq",
  }),
  new Questions({
    id: 2,
    text: "HTML stands for?",
    options: [
      "Hyper Text Makeup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Markup Language",
    ],
    correctOption: 1,
    type: "mcq",
  }),
  new Questions({
    id: 3,
    text: "The Earth is flat.",
    options: ["True", "False"],
    correctOption: 1,
    type: "true-false",
  }),
  new Questions({
    id: 4,
    text: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correctOption: 1,
    type: "mcq",
  }),
  new Questions({
    id: 5,
    text: "2 + 2 equals?",
    options: ["3", "4", "5", "22"],
    correctOption: 1,
    type: "mcq",
  }),
];

const options = document.querySelector(".options");
const prevBtn = document.querySelector(".buttons").children[0];
const nextBtn = document.querySelector(".buttons").children[1];

class Quiz {
  constructor(questions, duration) {
    this.questions = questions;
    this.duration = duration;
    this.userResponse = {};
    this.score = 0;
    this.currQuesIndex = 0;
  }

  start() {
    this.currentQuestion();
    this.startTimer();
    prevBtn.style.display = "none";
  }

  startTimer() {
    const timer = document.getElementsByClassName("timer");
    const remainingTime=this.duration*60;

    
    const hr=Math.floor(remainingTime/3600);
    const min=Math.floor((remainingTime/60)%60);
    const sec=Math.floor(remainingTime%60);
    timer.innerHTML=`${hr}:${min}:${sec}`;

    if(remainingTime<=0){
        clearInterval(timer());
    }
  }

  currentQuestion() {
    const idx = this.currQuesIndex;
    const questionTextElement = document.querySelector("p");
    questionTextElement.textContent = this.questions[idx].text;

    this.displayOptions(idx);

    prevBtn.style.display = idx === 0 ? "none" : "block";
  }

  displayOptions(qIdx) {
    const optionsUL = document.querySelector("ul");
    const opts = this.questions[qIdx].options;

    optionsUL.innerHTML = opts
      .map((option, index) => `<li data-index="${index}">${option}</li>`)
      .join("");
  }

  prevQuestion() {
    if (this.currQuesIndex === 0) return;

    if (this.currQuesIndex === this.questions.length - 1) {
      const nextBtn = document.querySelector(".buttons").lastElementChild;
      nextBtn.textContent = "next";
    }
    this.currQuesIndex--;
    this.currentQuestion();
  }

  nextQuestion() {
    if (this.currQuesIndex === this.questions.length - 1) {
      this.submit();
      return;
    }

    if (this.currQuesIndex === this.questions.length - 2) {
      const nextBtn = document.querySelector(".buttons").lastElementChild;
      nextBtn.textContent = "submit";
    }
    this.currQuesIndex++;
    this.currentQuestion();
  }

  captureUserResponse(userSelecetedIOption) {
    const qIdx = this.currQuesIndex;
    this.userResponse[qIdx] = userSelecetedIOption;
  }

  calculateScore() {
    const qIdx = this.currQuesIndex;
    for (let questionIdx in this.userResponse) {
      const optionIdx = this.userResponse[questionIdx];
      const correctOption = this.questions[qIdx].correctOption;
      if (correctOption === optionIdx) {
        this.score++;
      }
    }
  }

  submit() {
    this.calculateScore();
    console.log(this.userResponse);
    console.log("score", this.score);
  }
}

const q1 = new Quiz(questions, 20);
q1.start();

options.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    const optionIdx = Number(event.target.dataset.index);
    q1.captureUserResponse(optionIdx);
  }
});
prevBtn.addEventListener("click", () => {
  q1.prevQuestion();
});
nextBtn.addEventListener("click", () => {
  q1.nextQuestion();
});
