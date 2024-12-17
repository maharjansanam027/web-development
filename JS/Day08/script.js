
function time(){
    const timer = document.getElementById('root');
const now = new Date();
const nepaliTime = now.toLocaleTimeString();
timer.innerHTML = nepaliTime;
}

const timer = document.getElementById('root');

timer.style.fontSize = '100px';
timer.style.display='flex';
timer.style.justifyContent = 'center';
timer.style.height = '100vh';
timer.style.alignItems = 'center';
timer.style.fontWeight='bold';

setInterval(time,1000);


