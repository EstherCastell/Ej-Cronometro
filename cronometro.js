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
function renderTick() {
  document.getElementById("tick").innerHTML = tick;
}

function addEvents() {
  const startButton = document.getElementById("startChronButton");
  startButton.EventListener("click", startChron);
  const stopButton = document.getElementById("stopChronButton");
  stopButton.addEventListener("click", stopChron);
}
