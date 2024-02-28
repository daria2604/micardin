import Timer from 'easytimer.js';

const CLASSES = {
  hours: '.timer__hours',
  minutes: '.timer__minutes',
  seconds: '.timer__seconds',
};

export default function () {
  const timer = new Timer();
  const hoursEl = document.querySelectorAll(CLASSES.hours)
  const minutesEl = document.querySelectorAll(CLASSES.minutes)
  const secondsEl = document.querySelectorAll(CLASSES.seconds)

  timer.start({
    countdown: true,
    startValues: { hours: 20, minutes: 59, seconds: 45 },
  });

  timer.addEventListener('secondsUpdated', function (e) {
    hoursEl.forEach((el) => {
      el.innerHTML = timer.getTimeValues().hours;
    })

    minutesEl.forEach((el) => {
      el.innerHTML = timer.getTimeValues().minutes;
    })

    secondsEl.forEach((el) => {
      el.innerHTML = timer.getTimeValues().seconds;
    })
  });
}
