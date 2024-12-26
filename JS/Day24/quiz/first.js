// const correct_answer = ['b','c','d','b','b']
const correct_answer = {
    q1:'b',
    q2:'c',
    q3:'d',
    q4:'b',
    q5:'b'
}
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const data = new FormData(form);
    const answer = Array.from(data.values());
    let result = 0;
    for (const [key, value] of data.entries()) {
        if(value === correct_answer[key])
        {
            result++;
        }
    }





    // if there is negative marking then it will not working
    // let result = 0;
    // for(let i = 0;i<answer.length;i++)
    // {
    //     if(answer[i]===correct_answer[i])
    //     {
    //         result++;
    //     }
    // }

    const result1 = document.getElementById('result');
    result1.innerHTML = `${result} out of 5`;



    // console.log(result);
})