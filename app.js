// ================================
// ===== Start-to-Run App JS =====
// ================================

// ===== Training Plan (SHORTENED EXAMPLE — KEEP YOUR FULL ONE) =====
// ⚠️ If you already have your full 11-week plan above,
// KEEP IT. Do NOT duplicate it.
// I'm leaving structure example here for clarity.

const trainingPlan = window.trainingPlan || []; 
// If your full plan already exists above, this line will not overwrite it.

// ===== DOM Elements =====
const weekSelect = document.getElementById("weekSelect");
const daySelect = document.getElementById("daySelect");
const intervalTypeDisplay = document.getElementById("intervalType");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const beep = document.getElementById("beep");

// OPTIONAL: Only works if you added it in HTML
const finishBeep = document.getElementById("finishBeep");

// ===== State =====
let currentIntervals = [];
let intervalIndex = 0;
let timer = null;
let remainingSeconds = 0;
let audioUnlocked = false;

// ================================
// ===== Utility Functions =====
// ================================

function updateDisplay() {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  timeDisplay.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
}

function resetTimerState() {
  clearInterval(timer);
  timer = null;
  intervalIndex = 0;
}

// ================================
// ===== Populate Weeks =====
// ================================

function populateWeeks() {
  weekSelect.innerHTML = "";

  trainingPlan.forEach((week, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = week.name;
    weekSelect.appendChild(option);
  });

  populateDays();
}

// ================================
// ===== Populate Days =====
// ================================

function populateDays() {
  daySelect.innerHTML = "";

  const weekIndex = parseInt(weekSelect.value);
  const week = trainingPlan[weekIndex];

  week.workouts.forEach((day, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent =
      day.intervals.length > 0 ? day.name : `${day.name} (Rest)`;
    daySelect.appendChild(option);
  });

  loadIntervals();
}

// ================================
// ===== Load Intervals =====
// ================================

function loadIntervals() {
  const weekIndex = parseInt(weekSelect.value);
  const dayIndex = parseInt(daySelect.value);

  const week = trainingPlan[weekIndex];
  const day = week.workouts[dayIndex];

  resetTimerState();

  currentIntervals = day.intervals;

  if (currentIntervals.length > 0) {
    remainingSeconds = currentIntervals[0].duration;
    intervalTypeDisplay.textContent =
      currentIntervals[0].type.toUpperCase();
  } else {
    remainingSeconds = 0;
    intervalTypeDisplay.textContent = "REST DAY";
  }

  updateDisplay();
}

// ================================
// ===== Start Timer =====
// ================================

function startTimer() {

  // Unlock audio (mobile browsers require interaction)
  if (!audioUnlocked) {
    try {
      beep.currentTime = 0;
      beep.play();
      if (finishBeep) {
        finishBeep.currentTime = 0;
        finishBeep.play();
      }
    } catch (e) {}
    audioUnlocked = true;
  }

  if (currentIntervals.length === 0) return;
  if (timer !== null) return;

  timer = setInterval(() => {

    if (remainingSeconds <= 0) {

      // Interval finished sound
      beep.currentTime = 0;
      beep.play();

      intervalIndex++;

      if (intervalIndex >= currentIntervals.length) {

        // Workout Complete
        resetTimerState();
        intervalTypeDisplay.textContent = "WORKOUT COMPLETE!";
        remainingSeconds = 0;
        updateDisplay();

        if (finishBeep) {
          finishBeep.currentTime = 0;
          finishBeep.play();
        }

        return;
      }

      // Move to next interval
      remainingSeconds = currentIntervals[intervalIndex].duration;
      intervalTypeDisplay.textContent =
        currentIntervals[intervalIndex].type.toUpperCase();

    } else {
      remainingSeconds--;
    }

    updateDisplay();

  }, 1000);
}

// ================================
// ===== Pause Timer =====
// ================================

function pauseTimer() {
  resetTimerState();
}

// ================================
// ===== Event Listeners =====
// ================================

weekSelect.addEventListener("change", populateDays);
daySelect.addEventListener("change", loadIntervals);
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

// ================================
// ===== Initialize =====
// ================================

populateWeeks();
