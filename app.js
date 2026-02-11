// ================================
// ===== Start-to-Run App JS =====
// ================================

// Training Plan: Full 11 Weeks const trainingPlan = [ // ===== WEEK 1 ===== { name: "Week 1", workouts: [ { name: "Day 1", intervals: [ { type:"run", duration:60},{ type:"walk", duration:60 }, { type:"run", duration:60},{ type:"walk", duration:60 }, { type:"run", duration:120},{ type:"walk", duration:120 }, { type:"run", duration:120},{ type:"walk", duration:120 }, { type:"run", duration:180},{ type:"walk", duration:180 } ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ { type:"run", duration:60},{ type:"walk", duration:60 }, { type:"run", duration:60},{ type:"walk", duration:60 }, { type:"run", duration:120},{ type:"walk", duration:120 }, { type:"run", duration:180},{ type:"walk", duration:180 }, { type:"run", duration:180},{ type:"walk", duration:180 } ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ { type:"run", duration:60},{ type:"walk", duration:60 }, { type:"run", duration:120},{ type:"walk", duration:120 }, { type:"run", duration:240},{ type:"walk", duration:180 }, { type:"run", duration:240},{ type:"walk", duration:180 }, { type:"run", duration:300},{ type:"walk", duration:60 } ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 2 ===== { name: "Week 2", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:60},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:60},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 3 ===== { name: "Week 3", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:60},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:60},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:240},{type:"walk",duration:180}, {type:"run",duration:240},{type:"walk",duration:180}, {type:"run",duration:300},{type:"walk",duration:60} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 4 ===== { name: "Week 4", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:60},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:180}, {type:"run",duration:180},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:60} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:60},{type:"walk",duration:60}, {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:240},{type:"walk",duration:180}, {type:"run",duration:240},{type:"walk",duration:180}, {type:"run",duration:300},{type:"walk",duration:60} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 5 ===== { name: "Week 5", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:120}, {type:"run",duration:300},{type:"walk",duration:180}, {type:"run",duration:300},{type:"walk",duration:180}, {type:"run",duration:300},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:180},{type:"walk",duration:120}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:420},{type:"walk",duration:120} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:240},{type:"walk",duration:120}, {type:"run",duration:300},{type:"walk",duration:120}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:420},{type:"walk",duration:120} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 6 ===== { name: "Week 6", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:180},{type:"walk",duration:120}, {type:"run",duration:300},{type:"walk",duration:180}, {type:"run",duration:300},{type:"walk",duration:180}, {type:"run",duration:300},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:120},{type:"walk",duration:60}, {type:"run",duration:180},{type:"walk",duration:120}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:420},{type:"walk",duration:120} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:120},{type:"walk",duration:120}, {type:"run",duration:240},{type:"walk",duration:120}, {type:"run",duration:300},{type:"walk",duration:120}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:420},{type:"walk",duration:120} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 7 ===== { name: "Week 7", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:300},{type:"walk",duration:60}, {type:"run",duration:360},{type:"walk",duration:120}, {type:"run",duration:420},{type:"walk",duration:120}, {type:"run",duration:480},{type:"walk",duration:60} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:480},{type:"walk",duration:60}, {type:"run",duration:480},{type:"walk",duration:120}, {type:"run",duration:480},{type:"walk",duration:60}, {type:"run",duration:480},{type:"walk",duration:60} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:600},{type:"walk",duration:120}, {type:"run",duration:600},{type:"walk",duration:120}, {type:"run",duration:720},{type:"walk",duration:60} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 8 ===== { name: "Week 8", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:720},{type:"walk",duration:120}, {type:"run",duration:900},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:720},{type:"walk",duration:60}, {type:"run",duration:720},{type:"walk",duration:60} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:1200},{type:"walk",duration:60} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 9 ===== { name: "Week 9", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:900},{type:"walk",duration:120}, {type:"run",duration:900},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:720},{type:"walk",duration:60}, {type:"run",duration:720},{type:"walk",duration:60} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:1200},{type:"walk",duration:60} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 10 ===== { name: "Week 10", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:900},{type:"walk",duration:120}, {type:"run",duration:900},{type:"walk",duration:120} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:720},{type:"walk",duration:60}, {type:"run",duration:720},{type:"walk",duration:60} ] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:1200},{type:"walk",duration:60} ] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] }, // ===== WEEK 11 ===== { name: "Week 11", workouts: [ { name: "Day 1", intervals: [ {type:"run",duration:600},{type:"walk",duration:60}, {type:"run",duration:1200},{type:"walk",duration:60} ] }, { name: "Day 2", intervals: [] }, { name: "Day 3", intervals: [{type:"run",duration:1800}] }, { name: "Day 4", intervals: [] }, { name: "Day 5", intervals: [{type:"run",duration:1800}] }, { name: "Day 6", intervals: [] }, { name: "Day 7", intervals: [] } ] } ];

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

