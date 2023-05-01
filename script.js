'use strict';
const [startBtn, stopBtn, resetBtn] =
  document.querySelectorAll('.timer_button');
const timerDOM = document.querySelector('.timer');

class Stopwatch {
  constructor(element) {
    this.timer = element;
    this.interval = null;
    this.defaultTime = '00:00.00';
    this.startTime = 0;
    this.elapsedTime = 0;
  }

  timeToTwoString(time) {
    const timeStr = String(time);
    if (timeStr.length === 1) {
      return '0' + time;
    }
    if (timeStr.length === 3) {
      return timeStr.slice(0, 2);
    }
    return time;
  }

  timeToString(time) {
    const date = new Date(time);
    const minutes = this.timeToTwoString(date.getUTCMinutes());
    const seconds = this.timeToTwoString(date.getUTCSeconds());
    const milliseconds = this.timeToTwoString(date.getMilliseconds());
    return `${minutes}:${seconds}.${milliseconds}`;
  }

  startTimer() {
    this.elapsedTime = Date.now() - this.startTime;
    const time = this.timeToString(this.elapsedTime);
    this.timer.innerHTML = time;
  }

  start() {
    clearInterval(this.interval);
    this.startTime = Date.now() - this.elapsedTime;
    this.interval = setInterval(this.startTimer.bind(this), 10);
  }
  stop() {
    clearInterval(this.interval);
  }
  reset() {
    clearInterval(this.interval);
    this.timer.innerHTML = this.defaultTime;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.interval = null;
  }
}

const stopWatch = new Stopwatch(timerDOM);
startBtn.addEventListener('click', () => {
  stopWatch.start();
});
stopBtn.addEventListener('click', () => {
  stopWatch.stop();
});
resetBtn.addEventListener('click', () => {
  stopWatch.reset();
});
