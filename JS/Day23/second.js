const grandfather = document.getElementById('grandfather');
const father = document.getElementById('father');
const son = document.getElementById('son');

grandfather.addEventListener('click',()=>{
    console.log("grandfather clicked");
},false)
father.addEventListener('click',()=>{
    console.log("father clicked");
},true)
son.addEventListener('click',()=>{
    console.log("son clicked");
},false)
