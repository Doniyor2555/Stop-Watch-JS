window.addEventListener("DOMContentLoaded", () => {
  const time = document.querySelector('.time'),
        startBtn = document.getElementById("start"),
        stopBtn = document.getElementById("stop"),
        resetBtn = document.getElementById("reset");

  startBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", stop);
  resetBtn.addEventListener("click", reset);

  let seconds = 0,
      interval  = null;

  function timer () {
    seconds++;

   let hours = Math.floor(seconds / 3600),
       mins = Math.floor((seconds - (hours * 3600)) / 60),
       second = seconds % 60;

    if(hours < 9) hours = '0' + hours; 
    if(mins < 9)  mins = '0' + mins ;
    if(second < 9)  second = '0' + second;
      
    time.innerHTML = `${hours}:${mins}:${second}`;
  }

  function start() {
    if(interval) return;

    interval = setInterval(timer, 1000);
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  function reset () {
    stop();
    seconds = 0;
    time.innerHTML = '00:00:00';
  }

})