
const time = document.querySelector('.stopWatch');
const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');
const resetBtn = document.getElementById('resetbtn');

let counter = 0;
let interval = null;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function timer() {
    counter++
   
    let hrs = Math.floor(counter / 3600) 
    let min = Math.floor((counter - (hrs * 3600)) / 60);
    let sec = counter % 60;
    if(sec< 10) sec = '0' + sec
    if(min< 10) min = '0' + min;
    if(hrs< 10) hrs = '0' + hrs;
    time.innerHTML = `${hrs}: ${min}: ${sec}`;
}
 
function start() {
    if(interval){
        return
    }

    interval = setInterval(timer, 1000);       
    
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    counter = 0;
    time.innerHTML = '00:00:00';
}

