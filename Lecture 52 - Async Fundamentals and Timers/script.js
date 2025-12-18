class Question {
  constructor() {
    this.operators = ["+", "-", "*", "/", "%"];
    this.operand1 = this.random(50);
    this.operand2 = this.random(50);
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)];
    this.correctAnswer = this.calculateAnswer();
    this.score = 10;
  }

  random(high) {
    return Math.floor(Math.random() * high) + 1;
  }

  calculateAnswer() {
    switch (this.operator) {
      case "+": return this.operand1 + this.operand2;
      case "-": return this.operand1 - this.operand2;
      case "*": return this.operand1 * this.operand2;
      case "/": return Math.floor(this.operand1 / this.operand2);
      case "%": return this.operand1 % this.operand2;
    }
  }

  display() {
    return `${this.operand1} ${this.operator} ${this.operand2}`;
  }

  validateAnswer(answer) {
    return Number(answer) === this.correctAnswer;
  }
}

class Quiz {
  constructor() {
    this.score = 0;
    this.currentQuestion = new Question();
  }

  showQuestion() {
    questionEle.textContent = this.currentQuestion.display();
  }

  submitAnswer(answer) {
    if (this.currentQuestion.validateAnswer(answer)) {
      this.score += this.currentQuestion.score;
    }
    scoreEle.textContent = this.score;
    this.currentQuestion = new Question();
    this.showQuestion();
  }
}

const questionEle = document.querySelector("#questionText");
const answerEle = document.querySelector("#answerInput");
const scoreEle = document.querySelector("#score");

const quiz = new Quiz();
quiz.showQuestion();

answerEle.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    quiz.submitAnswer(answerEle.value);
    answerEle.value = "";
  }
});
