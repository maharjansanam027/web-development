
// this obj is promises 
// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f095d2f84d314d1dbc294315252201&q=London&aqi=yes`)


// like this also we can access async function
// setTimeout(()=>{

//     console.log(obj);
// },2000)

// Promises will come in three stage
// 1. pending which is initial stage     2. resolved             3. reject
// this is the way to handle promises.
// Promises.then((responce)=>{
//     console.log(responce.json());
// }).catch((error)=>{
//     console.log(error);
// })


// many programmer will writtin like this also 
// Promises.then((responce)=>{
//     let pro = responce.json();
//     pro.then((data)=>{
//         console.log(data);
//     })
// }).catch((error)=>{
//     console.log(error);
// })



// many programmer will write like this also
// const obj = Promises.then((responce)=>{
//     return responce.json();
// })

// obj.then((data)=>{
//     console.log(data);
// })


// we can do like this also 
// in one only we can return and the go for resolve promises
// Promises.then((responce)=>{
//     return responce.json();
// }).then((data)=>{
//     console.log(data);
// })

// more shortcut for before 
// Promises
// .then(responce=>responce.json())
// .then(data=>console.log(data)
// )

// like this also we can do 
fetch(`http://api.weatherapi.com/v1/current.json?key=f095d2f84d314d1dbc294315252201&q=London&aqi=yes`)
.then(responce=>responce.json())
.then(data=>console.log(data))







