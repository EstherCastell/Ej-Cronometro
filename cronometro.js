let tick = 0;
let interval;
let isRun = false;

function increaseTick() {
  tick++;
}

function stopChron() {
  tick++;
  clearInterval(interval);
  isRun = false;
}
function startChron() {
  if (isRun) {
    return;
  }
  renderTick();

  interval = setInterval(() => {
    isRun = true;
    increaseTick();
    renderTick();
  }, 1000);
}

function resetChron() {
  if (isRun == true) {
    clearInterval(interval);
    isRun = false;
  }
  tick = 0;
  document.getElementById("tick").innerHTML = "0";
}

function renderTick() {
  document.getElementById("tick").innerHTML = tick;
}

function addEvents() {
  const startButton = document.getElementById("startChronButton");
  startButton.EventListener("click", startChron);
  const stopButton = document.getElementById("stopChronButton");
  stopButton.addEventListener("click", stopChron);
  const resetButton = document.getElementById("resetChronButton");
  resetButton.addEventListener("click", resetChron);
}
