// ================================
// 1️⃣ Full 11-week Start-to-Run schedule
// ================================
const trainingPlan = [
  // ===== WEEK 1 =====
  {
    name: "Week 1",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:240},{type:"walk",duration:180},{type:"run",duration:240},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 2 =====
  {
    name: "Week 2",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 3 =====
  {
    name: "Week 3",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:240},{type:"walk",duration:180},{type:"run",duration:240},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 4 =====
  {
    name: "Week 4",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:180},{type:"run",duration:180},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:60}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:60},{type:"walk",duration:60},{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:240},{type:"walk",duration:180},{type:"run",duration:240},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 5 =====
  {
    name: "Week 5",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:120},{type:"run",duration:300},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:180},{type:"walk",duration:120},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:420},{type:"walk",duration:120}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:240},{type:"walk",duration:120},{type:"run",duration:300},{type:"walk",duration:120},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:420},{type:"walk",duration:120}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 6 =====
  {
    name: "Week 6",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:180},{type:"walk",duration:120},{type:"run",duration:300},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:180},{type:"run",duration:300},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:120},{type:"walk",duration:60},{type:"run",duration:180},{type:"walk",duration:120},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:420},{type:"walk",duration:120}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:120},{type:"walk",duration:120},{type:"run",duration:240},{type:"walk",duration:120},{type:"run",duration:300},{type:"walk",duration:120},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:420},{type:"walk",duration:120}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 7 =====
  {
    name: "Week 7",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:300},{type:"walk",duration:60},{type:"run",duration:360},{type:"walk",duration:120},{type:"run",duration:420},{type:"walk",duration:120},{type:"run",duration:480},{type:"walk",duration:60}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:480},{type:"walk",duration:60},{type:"run",duration:480},{type:"walk",duration:120},{type:"run",duration:480},{type:"walk",duration:60},{type:"run",duration:480},{type:"walk",duration:60}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:600},{type:"walk",duration:120},{type:"run",duration:600},{type:"walk",duration:120},{type:"run",duration:720},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 8 =====
  {
    name: "Week 8",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:720},{type:"walk",duration:120},{type:"run",duration:900},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:720},{type:"walk",duration:60},{type:"run",duration:720},{type:"walk",duration:60}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:1200},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 9 =====
  {
    name: "Week 9",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:900},{type:"walk",duration:120},{type:"run",duration:900},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:720},{type:"walk",duration:60},{type:"run",duration:720},{type:"walk",duration:60}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:1200},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 10 =====
  {
    name: "Week 10",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:900},{type:"walk",duration:120},{type:"run",duration:900},{type:"walk",duration:120}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:720},{type:"walk",duration:60},{type:"run",duration:720},{type:"walk",duration:60}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:1200},{type:"walk",duration:60}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  },

  // ===== WEEK 11 =====
  {
    name: "Week 11",
    workouts: [
      { name: "Day 1", intervals: [{type:"run",duration:600},{type:"walk",duration:60},{type:"run",duration:1200},{type:"walk",duration:60}] },
      { name: "Day 2", intervals: [] },
      { name: "Day 3", intervals: [{type:"run",duration:1800}] },
      { name: "Day 4", intervals: [] },
      { name: "Day 5", intervals: [{type:"run",duration:1800}] },
      { name: "Day 6", intervals: [] },
      { name: "Day 7", intervals: [] }
    ]
  }
];

// ================================
// 2️⃣ App logic (unchanged)
// ================================
let currentWeekIndex = 0;
let currentDayIndex = 0;
let currentIntervalIndex = 0;
let timer = null;
let remainingTime = 0;

const weekSelect = document.getElementById("weekSelect");
const daySelect = document.getElementById("daySelect");
const intervalTypeEl = document.getElementById("intervalType");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const beep = document.getElementById("beep");

// Populate week select
trainingPlan.forEach((week, i) => {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = week.name;
  weekSelect.appendChild(option);
});

// Populate day select based on week
function populateDays() {
  daySelect.innerHTML = "";
  const workouts = trainingPlan[currentWeekIndex].workouts;
  workouts.forEach((day, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = day.name;
    daySelect.appendChild(option);
  });
}
populateDays();

// Event listeners for selects
weekSelect.addEventListener("change", () => {
  currentWeekIndex = parseInt(weekSelect.value);
  currentDayIndex = 0;
  currentIntervalIndex = 0;
  populateDays();
  resetTimer();
});

daySelect.addEventListener("change", () => {
  currentDayIndex = parseInt(daySelect.value);
  currentIntervalIndex = 0;
  resetTimer();
});

function resetTimer() {
  clearInterval(timer);
  const interval = getCurrentInterval();
  if(interval){
    remainingTime = interval.duration;
    updateDisplay();
    intervalTypeEl.textContent = interval.type.toUpperCase();
  } else {
    intervalTypeEl.textContent = "--";
    timeEl.textContent = "00:00";
  }
}

function getCurrentInterval() {
  const day = trainingPlan[currentWeekIndex].workouts[currentDayIndex];
  if(day && day.intervals[currentIntervalIndex]){
    return day.intervals[currentIntervalIndex];
  }
  return null;
}

function updateDisplay() {
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, "0");
  const seconds = (remainingTime % 60).toString().padStart(2, "0");
  timeEl.textContent = `${minutes}:${seconds}`;
}

// Start timer
startBtn.addEventListener("click", () => {
  if(timer) return;
  if(!getCurrentInterval()) return;

  timer = setInterval(() => {
    remainingTime--;
    updateDisplay();
    if(remainingTime <= 0){
      beep.play();
      currentIntervalIndex++;
      const next = getCurrentInterval();
      if(next){
        remainingTime = next.duration;
        intervalTypeEl.textContent = next.type.toUpperCase();
      } else {
        clearInterval(timer);
        timer = null;
        intervalTypeEl.textContent = "DONE!";
      }
    }
  }, 1000);
});

// Pause timer
pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

// Initialize display
resetTimer();
