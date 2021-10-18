const blackWindow = document.querySelector('.black-window');
const onBtn = document.querySelector('.button1');
const offBtn = document.querySelector('.button2');
const clockEl = document.querySelector('#clock');

onBtn.addEventListener('click', () => {
    blackWindow.style.backgroundColor = 'transparent';
});

offBtn.addEventListener('click', () => {
    blackWindow.style.backgroundColor = '#000';
});

function realTimeClock() {
    const rtClock = new Date();

    class Clock {
        constructor(options) {
            this.hours = options.hours;
            this.mins = options.mins;
        }
    }
    const clock = new Clock({
        hours: rtClock.getHours(),
        mins: rtClock.getMinutes()
    });

    clock.hours = ('0' + clock.hours).slice(-2);
    clock.mins = ('0' + clock.mins).slice(-2);

    clockEl.innerHTML = `${clock.hours}:${clock.mins}`;

    const timer = setTimeout(realTimeClock, 500);
}