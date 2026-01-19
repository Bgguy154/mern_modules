const sessionName = document.querySelector("#name");
const sessionDuration = document.querySelector("#duration");
const breakDuration = document.querySelector("#breakDuration");
const cyclesInput = document.querySelector("#cycles");
const button = document.querySelector("#startBtn");
const form = document.querySelector("#form");

const nameError = document.querySelector("#nameError");
const durationError = document.querySelector("#durationError");
const breakError = document.querySelector("#breakError");
const cycleError = document.querySelector("#cycleError");

const timer = document.querySelector("#timer");
const h2 = document.querySelector("#h2");
const desc = document.querySelector("#desc");
const quoteBox = document.querySelector("#quote");
const pauseBtn = document.querySelector("#pauseBtn");

let studyMinutes = 0;
let breakMinutes = 0;
let totalCycles = 0;
let currentCycle = 1;

let currentPhase = "study";
let remainingSec = 0;

let intervalId = null;
let autoSaveInterval = null;
let isPaused = false;

function validateName() {
  if (sessionName.value.trim().length < 3) {
    nameError.textContent = "Minimum 3 characters required";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateDuration() {
  if (+sessionDuration.value < 2) {
    durationError.textContent = "Minimum 2 minutes required";
    return false;
  }
  durationError.textContent = "";
  return true;
}

function validateBreak() {
  if (+breakDuration.value < 1) {
    breakError.textContent = "Minimum 1 minute required";
    return false;
  }
  if (+breakDuration.value >= +sessionDuration.value) {
    breakError.textContent = "Break must be less than study duration";
    return false;
  }
  breakError.textContent = "";
  return true;
}

function validateCycles() {
  if (+cyclesInput.value < 1) {
    cycleError.textContent = "At least 1 cycle required";
    return false;
  }
  cycleError.textContent = "";
  return true;
}

function validateForm() {
  button.disabled = !(
    validateName() &&
    validateDuration() &&
    validateBreak() &&
    validateCycles()
  );
}

[sessionName, sessionDuration, breakDuration, cyclesInput].forEach((i) =>
  i.addEventListener("input", validateForm)
);

function startTimer(seconds, onComplete) {
  remainingSec = seconds;

  intervalId = setInterval(() => {
    if (isPaused) return;

    const m = Math.floor(remainingSec / 60);
    const s = remainingSec % 60;

    timer.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(
      2,
      "0"
    )}`;

    remainingSec--;

    if (remainingSec < 0) {
      clearInterval(intervalId);
      onComplete();
    }
  }, 100);
}

function startStudy() {
  currentPhase = "study";
  h2.textContent = "Current Phase: Studying 🧑‍💻";
  desc.textContent = `Cycle ${currentCycle} of ${totalCycles}`;

  fetchQuote();
  startTimer(studyMinutes * 60, startBreak);
}

function startBreak() {
  currentPhase = "break";
  h2.textContent = "Current Phase: Break ☕";
  desc.textContent = `Cycle ${currentCycle} of ${totalCycles}`;
  quoteBox.textContent = "";

  startTimer(breakMinutes * 60, () => {
    if (currentCycle < totalCycles) {
      currentCycle++;
      startStudy();
    } else {
      completeSession();
    }
  });
}

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;

  pauseBtn.textContent = isPaused ? "Resume ▶️" : "Pause ⏸️";
  h2.textContent = isPaused
    ? "Paused ⏸️"
    : currentPhase === "study"
    ? "Studying 🧑‍💻"
    : "Break ☕";
});

async function fetchQuote() {
  quoteBox.textContent = "Loading Motivational Quote...";

  try {
    const res = await fetch(
      "https://random-quotes-freeapi.vercel.app/api/random"
    );
    const data = await res.json();
    quoteBox.textContent = `${data.quote} - ${data.author || "unknown"}`;
  } catch {
    quoteBox.textContent = "Focus And Study";
  }
}

function autoSaveProgress() {
  const data = {
    name: sessionName.value,
    studyMinutes,
    breakMinutes,
    totalCycles,
    currentCycle,
    currentPhase,
    remainingSec,
    isPaused,
  };

  localStorage.setItem("activeSession", JSON.stringify(data));
  showSavedIndicator();
}

function startAutoSave() {
  autoSaveInterval = setInterval(autoSaveProgress, 10000);
}

function stopAutoSave() {
  clearInterval(autoSaveInterval);
  localStorage.removeItem("activeSession");
}

const saveIndicator = document.createElement("p");
saveIndicator.textContent = "Progress saved";
saveIndicator.style.opacity = 0;
document.body.appendChild(saveIndicator);

function showSavedIndicator() {
  saveIndicator.style.opacity = 1;
  setTimeout(() => (saveIndicator.style.opacity = 0), 1000);
}

function saveToHistory(status) {
  const history = JSON.parse(localStorage.getItem("sessionHistory")) || [];

  history.push({
    name: sessionName.value,
    totalStudyTime: studyMinutes * totalCycles,
    status,
    completedAt: new Date().toLocaleString(),
  });

  localStorage.setItem("sessionHistory", JSON.stringify(history));
}

function completeSession() {
  stopAutoSave();
  saveToHistory("Completed");

  h2.textContent = "Session Complete 🎉";
  timer.textContent = "";
  desc.textContent = "";
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  studyMinutes = +sessionDuration.value;
  breakMinutes = +breakDuration.value;
  totalCycles = +cyclesInput.value;
  currentCycle = 1;

  form.style.display = "none";

  startAutoSave();
  startStudy();
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("activeSession");
  if (!saved) return;

  const data = JSON.parse(saved);

  studyMinutes = data.studyMinutes;
  breakMinutes = data.breakMinutes;
  totalCycles = data.totalCycles;
  currentCycle = data.currentCycle;
  currentPhase = data.currentPhase;
  remainingSec = data.remainingSec;
  isPaused = data.isPaused;

  pauseBtn.textContent = isPaused ? "Resume ▶️" : "Pause ⏸️";
  form.style.display = "none";

  startAutoSave();
  startTimer(remainingSec, () =>
    currentPhase === "study" ? startBreak() : startStudy()
  );
});
