
function timer(){
const time1 = new Date("2028-7-21");
const time2 = new Date();

const time3 = time1-time2;


const days = Math.floor(time3/(1000*60*60*24));

const hour = Math.floor((time3/(1000*60*60))%24);

const minute = Math.floor((time3/(1000*60))%60);
const second = Math.floor((time3/(1000))%60);


const obj = document.getElementById('root');
let left = `${days} Days <br> ${hour} hour :${minute}  minutes : ${second} second `;
obj.innerHTML = left;
}

const obj = document.getElementById('root');

setInterval(timer,1000);
obj.style.fontSize = '80px';
obj.style.fontWeight = 'bold';

console.log(left);



