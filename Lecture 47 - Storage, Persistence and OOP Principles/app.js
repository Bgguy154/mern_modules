// =========================
// FITNESS CHALLENGE TRACKER
// Full JS implementation
// =========================

// ------------------------
// STATE MANAGEMENT
// ------------------------
const state = {
  participants: [],   // Participant instances
  challenges: [],     // Challenge instances
  subjects: []        // list of unique subjects
};

// DOM elements (assumes these exist in your HTML)
const participantForm = document.getElementById("participantForm");
const pName = document.getElementById("pName");
const pAge = document.getElementById("pAge");
const pLevel = document.getElementById("pLevel");
const participantList = document.getElementById("participantList");

const challengeForm = document.getElementById("challengeForm");
const cName = document.getElementById("cName");
const cType = document.getElementById("cType");
const cGoal = document.getElementById("cGoal");
const cDuration = document.getElementById("cDuration");
const challengeParticipants = document.getElementById("challengeParticipants");
const challengeList = document.getElementById("challengeList");

const logForm = document.getElementById("logForm");
const logParticipant = document.getElementById("logParticipant");
const logValue = document.getElementById("logValue");
const logDate = document.getElementById("logDate");
const saveLogBtn = document.getElementById("saveLogBtn");
const cancelLogBtn = document.getElementById("cancelLogBtn");

const filterSubject = document.getElementById("filterSubject");
const searchInput = document.getElementById("searchInput");
const sortByDate = document.getElementById("sortByDate");

const totalUsers = document.getElementById("totalUsers");
const totalSessions = document.getElementById("totalSessions");
const totalParticipants = document.getElementById("totalParticipants");

const leaderboardSelect = document.getElementById("leaderboardChallengeSelect");
const leaderboardTableBody = document.querySelector("#leaderboard tbody");
const dailyLogsContainer = document.getElementById("dailyLogsContainer");

// LocalStorage keys
const USERS_KEY = "fit_participants_v1";
const CHALLENGES_KEY = "fit_challenges_v1";
const SUBJECTS_KEY = "fit_subjects_v1";

// ------------------------
// PARTICIPANT (Constructor)
// ------------------------
function Participant(name, age, fitnessLevel) {
  this.name = name;
  this.age = age;
  this.fitnessLevel = fitnessLevel;
}

// instance method
Participant.prototype.logWorkout = function (challenge, value, date = new Date()) {
  // safe wrapper - calls Challenge.addProgress
  challenge.addProgress(this.name, date, value);
};

// ------------------------
// CHALLENGE CLASS
// ------------------------
class Challenge {
  #progress = {}; // private: { participantName: { "2025-12-10": 5, ... }, ... }

  constructor(name, type, goal, duration, participants = []) {
    if (!name || name.length < 5) throw new Error("Challenge name must be at least 5 chars");
    this.name = name;
    this.type = type;
    this.goal = Number(goal) || 1;
    this.duration = Math.max(1, Math.min(30, Number(duration) || 1));
    this.participants = participants.slice(); // array of participant names
    this.createdAt = Date.now();
  }

  // addProgress: participant name (string), date (string or Date), value (number)
  addProgress(participant, date, value) {
    const day = (new Date(date)).toISOString().split("T")[0];

    if (!this.participants.includes(participant)) {
      console.warn(`${participant} not in this challenge`);
      return;
    }
    if (!Number.isFinite(value) || value <= 0) {
      console.warn("invalid value:", value);
      return;
    }

    if (!this.#progress[participant]) this.#progress[participant] = {};
    if (!this.#progress[participant][day]) this.#progress[participant][day] = 0;
    this.#progress[participant][day] += Number(value);
  }

  // total across all days for a participant
  getTotalProgress(participant) {
    const logs = this.#progress[participant] || {};
    return Object.values(logs).reduce((a, b) => a + b, 0);
  }

  // percentage completion (capped 100)
  calculatePercentage(participant) {
    const total = this.getTotalProgress(participant);
    if (!this.goal) return 0;
    return Math.min(100, Math.round((total / this.goal) * 100));
  }

  getLeaderboard() {
    return this.participants
      .map(p => ({
        name: p,
        progress: this.getTotalProgress(p),
        percentage: this.calculatePercentage(p)
      }))
      .sort((a, b) => b.progress - a.progress);
  }

  get isComplete() {
    return this.participants.some(p => this.getTotalProgress(p) >= this.goal);
  }

  // expose progress for saving & UI logs
  getProgressData() {
    return JSON.parse(JSON.stringify(this.#progress));
  }

  // restore progress data (used on load)
  setProgressData(data) {
    // replace entire private progress object
    this.#progress = JSON.parse(JSON.stringify(data || {}));
  }

  daysRemaining() {
    const start = new Date(this.createdAt);
    const now = new Date();
    const passed = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return Math.max(0, this.duration - passed);
  }
}

// ------------------------
// UTILITY: Save / Load state (handles private progress)
// ------------------------
function saveState() {
  // participants can be serialized directly
  localStorage.setItem(USERS_KEY, JSON.stringify(state.participants));

  // challenges: backup progress via getProgressData()
  const chBackup = state.challenges.map(ch => ({
    name: ch.name,
    type: ch.type,
    goal: ch.goal,
    duration: ch.duration,
    participants: ch.participants,
    createdAt: ch.createdAt,
    progressBackup: ch.getProgressData()
  }));
  localStorage.setItem(CHALLENGES_KEY, JSON.stringify(chBackup));

  localStorage.setItem(SUBJECTS_KEY, JSON.stringify(state.subjects));
}

function loadState() {
  const p = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const c = JSON.parse(localStorage.getItem(CHALLENGES_KEY)) || [];
  const s = JSON.parse(localStorage.getItem(SUBJECTS_KEY)) || [];

  state.participants = p.map(x => new Participant(x.name, x.age, x.fitnessLevel));
  state.subjects = s || [];

  state.challenges = c.map(x => {
    const ch = new Challenge(x.name, x.type, x.goal, x.duration, x.participants || []);
    // restore createdAt if present
    if (x.createdAt) ch.createdAt = x.createdAt;
    ch.setProgressData(x.progressBackup || {});
    return ch;
  });
}

// ------------------------
// RENDER: PARTICIPANTS
// ------------------------
function renderParticipants() {
  participantList.innerHTML = "";
  challengeParticipants.innerHTML = "";

  state.participants.forEach(p => {
    // sidebar card
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `<p><strong>${escapeHtml(p.name)}</strong></p>
                      <div class="small">${escapeHtml(p.age)} yrs • ${escapeHtml(p.fitnessLevel)}</div>`;
    participantList.appendChild(card);

    // checkbox for adding to challenge
    const cbWrap = document.createElement("div");
    cbWrap.className = "cb-wrap";
    cbWrap.innerHTML = `<label><input type="checkbox" value="${escapeHtml(p.name)}"> ${escapeHtml(p.name)}</label>`;
    challengeParticipants.appendChild(cbWrap);
  });

  updateCounters();
}

// ------------------------
// RENDER: SUBJECT FILTER
// ------------------------
function renderSubjectFilter() {
  const cur = filterSubject.value || "all";
  filterSubject.innerHTML = `<option value="all">All Subjects</option>`;
  state.subjects.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    filterSubject.appendChild(opt);
  });
  filterSubject.value = cur;
}

// ------------------------
// RENDER: CHALLENGES (with progress bars)
// ------------------------
function renderChallenges() {
  challengeList.innerHTML = "";

  const search = (searchInput.value || "").trim().toLowerCase();
  const filter = filterSubject.value || "all";
  const sortOrder = sortByDate.value || "asc";

  // copy to avoid mutating
  let toRender = state.challenges.slice();

  // filter by subject if needed
  if (filter !== "all") {
    toRender = toRender.filter(ch => ch.name === filter || ch.type === filter);
  }
  if (search) {
    toRender = toRender.filter(ch => ch.name.toLowerCase().includes(search) || ch.type.toLowerCase().includes(search));
  }

  // sort by createdAt date
  toRender.sort((a, b) => sortOrder === "asc" ? a.createdAt - b.createdAt : b.createdAt - a.createdAt);

  toRender.forEach((ch, index) => {
    const div = document.createElement("div");
    div.className = "challenge-card";
    div.dataset.index = index;

    div.innerHTML = `
      <h3>${escapeHtml(ch.name)}</h3>
      <div class="meta">Type: ${escapeHtml(ch.type)} • Goal: ${ch.goal} • Days: ${ch.duration}</div>
      <div class="meta small">Days remaining: ${ch.daysRemaining()}</div>
      <div class="actions">
        <button class="log-btn" data-index="${index}">Log Progress</button>
        <button class="details-btn" data-index="${index}">Details</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
      <h4>Participant Progress</h4>
    `;

    // progress bars container
    const barsContainer = document.createElement("div");
    barsContainer.className = "bars-container";

    ch.participants.forEach(name => {
      const total = ch.getTotalProgress(name);
      const percent = ch.calculatePercentage(name);
      let levelClass = "low";
      if (percent > 70) levelClass = "high";
      else if (percent >= 30) levelClass = "mid";

      const pWrap = document.createElement("div");
      pWrap.className = "p-bar";

      pWrap.innerHTML = `
        <div class="p-meta">
          <strong>${escapeHtml(name)}</strong>
          <span class="p-stats">${percent}% • ${total}/${ch.goal}</span>
        </div>
        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
          <div class="progress-fill ${levelClass}" style="width:${percent}%"></div>
        </div>
      `;

      // click to expand daily logs for this participant
      pWrap.addEventListener("click", (ev) => {
        // avoid triggering when clicking buttons above
        ev.stopPropagation();
        showParticipantLogs(ch, name);
      });

      barsContainer.appendChild(pWrap);
    });

    div.appendChild(barsContainer);
    challengeList.appendChild(div);
  });

  renderSubjectFilter();
  renderLeaderBoardSelect();
  updateCounters();
}

// ------------------------
// OPEN LOG FORM (Step 2/3 feature)
// ------------------------
let activeChallengeIndex = null;

function openLogForm(idx) {
  activeChallengeIndex = idx;
  const ch = state.challenges[idx];

  if (!ch) return;
  logParticipant.innerHTML = "";
  logValue.value = "";
  logDate.value = new Date().toISOString().split("T")[0];

  ch.participants.forEach(pName => {
    const opt = document.createElement("option");
    opt.value = pName;
    opt.textContent = pName;
    logParticipant.appendChild(opt);
  });

  logForm.classList.remove("hidden");
}

// close
cancelLogBtn.addEventListener("click", () => {
  logForm.classList.add("hidden");
});

// save log
saveLogBtn.addEventListener("click", () => {
  if (activeChallengeIndex === null) return;
  const ch = state.challenges[activeChallengeIndex];
  const participant = logParticipant.value;
  const val = Number(logValue.value);
  const date = logDate.value;

  if (!participant) return alert("Select participant");
  if (!Number.isFinite(val) || val <= 0) return alert("Enter valid value (>0)");

  ch.addProgress(participant, date, val);

  saveState();
  renderChallenges();
  renderLeaderboard(Number(leaderboardSelect.value || 0));

  logForm.classList.add("hidden");
});

// ------------------------
// Show daily logs for a participant
// ------------------------
function showParticipantLogs(challenge, participantName) {
  const data = challenge.getProgressData()[participantName] || {};
  const entries = Object.entries(data).sort((a,b) => new Date(b[0]) - new Date(a[0]));

  dailyLogsContainer.innerHTML = `<h3>Daily logs — ${escapeHtml(participantName)}</h3>`;
  const ul = document.createElement("ul");
  if (entries.length === 0) {
    ul.innerHTML = "<li>No logs yet</li>";
  } else {
    entries.forEach(([date, val]) => {
      const li = document.createElement("li");
      li.textContent = `${date}: ${val}`;
      ul.appendChild(li);
    });
  }
  dailyLogsContainer.appendChild(ul);
}

// ------------------------
// Participant Form submit
// ------------------------
participantForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (pName.value || "").trim();
  const age = Number(pAge.value) || "";
  const level = pLevel.value || "Beginner";

  if (!name || name.length < 1) {
    return alert("Enter name");
  }

  // store
  state.participants.push(new Participant(name, age, level));

  saveState();
  renderParticipants();
  renderChallenges();

  participantForm.reset();
});

// ------------------------
// Challenge Form submit (validation + creation)
// ------------------------
function validateChallengeForm() {
  const name = (cName.value || "").trim();
  const type = (cType.value || "").trim();
  const goal = Number(cGoal.value);
  const duration = Number(cDuration.value);

  if (name.length < 5) return "Challenge name must be at least 5 characters";
  if (!type) return "Select type";
  if (!Number.isFinite(goal) || goal < 1) return "Goal must be a number >= 1";
  if (!Number.isFinite(duration) || duration < 1 || duration > 30) return "Duration must be 1-30 days";
  const selected = [...challengeParticipants.querySelectorAll("input:checked")].map(i => i.value);
  if (selected.length === 0) return "Select at least one participant";
  return null;
}

challengeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const err = validateChallengeForm();
  if (err) return alert(err);

  const name = (cName.value || "").trim();
  const type = (cType.value || "").trim();
  const goal = Number(cGoal.value);
  const duration = Number(cDuration.value);
  const participants = [...challengeParticipants.querySelectorAll("input:checked")].map(i => i.value);

  // create
  const ch = new Challenge(name, type, goal, duration, participants);
  state.challenges.push(ch);

  // add subject list
  if (!state.subjects.includes(name)) state.subjects.push(name);

  saveState();
  renderChallenges();

  challengeForm.reset();
});

// ------------------------
// Event delegation for challengeList (buttons: Log, Details, Delete)
// ------------------------
challengeList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const idx = Number(btn.dataset.index);
  if (btn.classList.contains("log-btn")) openLogForm(idx);
  else if (btn.classList.contains("details-btn")) openChallengeDetails(idx);
  else if (btn.classList.contains("delete-btn")) {
    if (confirm("Delete this challenge?")) {
      state.challenges.splice(idx, 1);
      saveState();
      renderChallenges();
    }
  }
});

// challenge details simple modal/alert
function openChallengeDetails(index) {
  const ch = state.challenges[index];
  if (!ch) return;
  const lb = ch.getLeaderboard();
  let msg = `Challenge: ${ch.name}\nType: ${ch.type}\nGoal: ${ch.goal}\nDuration: ${ch.duration} days\nParticipants: ${ch.participants.join(", ")}\n\nLeaderboard:\n`;
  lb.forEach((row, i) => msg += `${i+1}. ${row.name} — ${row.progress} (${row.percentage}%)\n`);
  alert(msg);
}

// ------------------------
// FILTERS: search, subject, sort
// ------------------------
searchInput.addEventListener("input", renderChallenges);
filterSubject.addEventListener("change", renderChallenges);
sortByDate.addEventListener("change", renderChallenges);

// ------------------------
// LEADERBOARD: select + render
// ------------------------
function renderLeaderBoardSelect() {
  leaderboardSelect.innerHTML = "";
  state.challenges.forEach((ch, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${ch.name} — ${ch.type}`;
    leaderboardSelect.appendChild(opt);
  });
  // ensure table renders for selected or 0
  renderLeaderboard(Number(leaderboardSelect.value || 0));
}

function renderLeaderboard(idx) {
  leaderboardTableBody.innerHTML = "";
  const ch = state.challenges[idx];
  if (!ch) return;

  const lb = ch.getLeaderboard();
  lb.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.dataset.name = item.name;
    tr.innerHTML = `<td>${i+1}</td><td>${escapeHtml(item.name)}</td><td>${item.progress}</td><td>${item.percentage}%</td>`;
    if (i === 0) tr.classList.add("winner");
    leaderboardTableBody.appendChild(tr);
  });
}

leaderboardSelect.addEventListener("change", () => {
  renderLeaderboard(Number(leaderboardSelect.value));
});

// click row -> daily logs (in leaderboard)
leaderboardTableBody.addEventListener("click", (e) => {
  const tr = e.target.closest("tr");
  if (!tr) return;
  const name = tr.dataset.name;
  const idx = Number(leaderboardSelect.value);
  const ch = state.challenges[idx];
  if (!ch) return;
  showParticipantLogs(ch, name);
});

// ------------------------
// Counters (dashboard)
// ------------------------
function updateCounters() {
  totalUsers.textContent = state.participants.length;
  totalSessions.textContent = state.challenges.length;
  const totalParts = state.challenges.reduce((acc, ch) => acc + (ch.participants ? ch.participants.length : 0), 0);
  totalParticipants.textContent = totalParts;
}

// ------------------------
// Helper: escapeHtml
// ------------------------
function escapeHtml(s) {
  if (s == null) return "";
  return String(s).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

// ------------------------
// Small examples: call / apply / bind usage
// ------------------------

// .call() example: borrow addProgress to an object (illustrative)
function borrowAddProgress(targetObj, participant, date, value) {
  // use Challenge.prototype.addProgress.call with a Challenge-like object if sensible
  // (not commonly needed; this is just to demonstrate .call)
  Challenge.prototype.addProgress.call(targetObj, participant, date, value);
}

// .apply() example: compute sum of array of numbers
function sumArray(arr) {
  return Array.prototype.reduce.apply(arr, [(a,b) => a+b, 0]); // demonstrates apply (not ideal usage)
}
// better way: arr.reduce((a,b)=>a+b,0)

// .bind() example: handy when attaching event handlers with fixed context
const boundOpenLogForm = openLogForm.bind(null); // not super-useful here but demonstrates bind

// ------------------------
// INIT: load + render
// ------------------------
loadState();
renderParticipants();
renderChallenges();

// ensure leaderboard select and table are in sync
renderLeaderBoardSelect();
updateCounters();
