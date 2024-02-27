import Timer from 'easytimer.js';

const CLASSES = {
  hours: '.timer__hours',
  minutes: '.timer__minutes',
  seconds: '.timer__seconds',
};

export default function () {
  const timer = new Timer();

  timer.start({
    countdown: true,
    startValues: { hours: 20, minutes: 59, seconds: 45 },
  });

  timer.addEventListener('secondsUpdated', function (e) {
    document.querySelector(CLASSES.hours).innerHTML =
      timer.getTimeValues().hours;

    document.querySelector(CLASSES.minutes).innerHTML =
      timer.getTimeValues().minutes;

    document.querySelector(CLASSES.seconds).innerHTML =
      timer.getTimeValues().seconds;
  });
}
