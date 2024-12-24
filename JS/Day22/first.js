const element1 = document.getElementById("input1");
const element2 = document.getElementById("input2");
const button = document.querySelector('button');
const result = document.getElementById('result');

console.log(element1.value);



button.addEventListener('click',()=>{
    const result1 = Number(element1.value) + Number(element2.value);           
    result.innerHTML = result1;
})

