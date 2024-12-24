const red = document.getElementsByClassName('red');
const blue = document.getElementsByClassName('blue');
const green = document.getElementsByClassName('green');
const gray = document.getElementsByClassName('gray');
const orange = document.getElementsByClassName('orange');
const purple = document.getElementsByClassName('purple');



// red[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'red';
// })
// blue[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'blue';
// })
// green[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'green';
// })
// gray[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'gray';
// })
// orange[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'orange';
// })
// purple[0].addEventListener('click',()=>{
//     document.body.style.backgroundColor = 'purple';
// })


// const buttons = document.querySelectorAll('div');

// for (let index = 1; index < buttons.length; index++){
//     // console.log(buttons[index].className)
//     document.body.style.backgroundColor = red;
// }

const root = document.getElementsByClassName('root');

root[0].addEventListener('click',(event)=>{
    if(event.target.tagName === 'DIV')
    document.body.style.backgroundColor = event.target.className;
})