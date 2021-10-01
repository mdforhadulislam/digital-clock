const hour = document.querySelector('#hour');
const minute = document.querySelector("#minute");
const second = document.querySelector('#second');
const progress = document.getElementById('progress');

function showTime() {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;

    progress.style.width = (seconds / 60) * 100 + '%'
}
setInterval(showTime, 1000)