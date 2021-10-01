const hour = document.querySelector("#hours h1");
const minute = document.querySelector("#minutes h1");
const second = document.querySelector("#secoend h1");
const progress = document.getElementById("secoensContaingAnimationbar");
console.log(progress);

console.log(hour, minute, second);

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    conditionChack = (firstValue, secoendValue) => {
        return firstValue === secoendValue;
    };

    if (
        conditionChack(hours, 10) ||
        conditionChack(hours, 11) ||
        conditionChack(hours, 12)
    ) {
        hours = date.getHours();
    } else {
        hours = "0" + hours;
    }

    if (
        !( conditionChack(minutes, 0) ||
            conditionChack(minutes, 1) ||
            conditionChack(minutes, 2) ||
            conditionChack(minutes, 3) ||
            conditionChack(minutes, 4) ||
            conditionChack(minutes, 5) ||
            conditionChack(minutes, 6) ||
            conditionChack(minutes, 7) ||
            conditionChack(minutes, 8) ||
            conditionChack(minutes, 9))
    ) {
        minutes = date.getMinutes();
    } else {
        minutes = "0" + minutes;
    }

    if (
        !(conditionChack(seconds, 0) ||
            conditionChack(seconds, 1) ||
            conditionChack(seconds, 2) ||
            conditionChack(seconds, 3) ||
            conditionChack(seconds, 4) ||
            conditionChack(seconds, 5) ||
            conditionChack(seconds, 6) ||
            conditionChack(seconds, 7) ||
            conditionChack(seconds, 8) ||
            conditionChack(seconds, 9))
    ) {
        seconds = date.getSeconds();
    } else {
        seconds = "0" + seconds;
    }

    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;

    progress.style.width = (seconds / 60) * 100 + "%";
}
setInterval(showTime, 1000);



// min javascript  code 
// const hour=document.querySelector("#hours h1"),minute=document.querySelector("#minutes h1"),second=document.querySelector("#secoend h1"),progress=document.getElementById("secoensContaingAnimationbar");console.log(progress),console.log(hour,minute,second);function showTime(){let a=new Date,b=a.getHours(),c=a.getMinutes(),d=a.getSeconds();conditionChack=(a,b)=>a===b,b=conditionChack(b,10)||conditionChack(b,11)||conditionChack(b,12)?a.getHours():"0"+b,c=conditionChack(c,0)||conditionChack(c,1)||conditionChack(c,2)||conditionChack(c,3)||conditionChack(c,4)||conditionChack(c,5)||conditionChack(c,6)||conditionChack(c,7)||conditionChack(c,8)||conditionChack(c,9)?"0"+c:a.getMinutes(),d=conditionChack(d,0)||conditionChack(d,1)||conditionChack(d,2)||conditionChack(d,3)||conditionChack(d,4)||conditionChack(d,5)||conditionChack(d,6)||conditionChack(d,7)||conditionChack(d,8)||conditionChack(d,9)?"0"+d:a.getSeconds(),hour.innerText=b,minute.innerText=c,second.innerText=d,progress.style.width=100*(d/60)+"%"}setInterval(showTime,1e3);
