const form = document.querySelector('form');

// after each input it will fire
// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

// after change it will trigger
// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })


// it will not bubble so it shouuld add to particcular case
// form.addEventListener('focus',(event)=>{
//     console.log(event.target.value);
// })'


// trigger when focus other wise no problem
// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })

// exact opposite
// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

// it will submit the form and refreshh the page.
// form.addEventListener('click',(event)=>{
//     console.log("form submitted");
// })

form.addEventListener('submit',(event)=>{
    
    event.preventDefault();

    // if there is 100 input field then we canit go like this to access the values
    // const firstname = document.getElementById('firstname');
    // console.log(firstname.value);
    // const lastname = document.getElementById('lastname');
    // console.log(lastname.value);
    // const age = document.getElementById('age');
    // console.log(age.value);


    // like formdate object is there to access 100 entries

    // FormData is object which will take argument and have all the data of form
    const data = new FormData(form);
    // console.log(Array.from(data.keys())); // it will return the iterator so we can access by for of loop

    // it will give 2d array with key and values
    // for (const key of data.entries()) {
    //     console.log(key);
    // }

    // by this we can iterate iterator
    // for (const key of data.keys()) {
    //     console.log(key);
    // }


    // const result = document.getElementById('result');
    // result.innerText = `${firstname.value} ${lastname.value} is good boy`;

    // document.body.append(result);


})