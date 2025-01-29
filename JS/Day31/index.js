
const cart = ["coke","sandwich","pizza"];

// function placeOrder(cart, callback){
//     console.log("Talking with Zomato...")

//     const pr = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Order placed sucessfully.");
//             const order = {orderId:251, food:cart, restaurent:"Dominos", location:"Bangalore"};
//             callback(order);
//         },2000)
//     })
//     return pr;
// }
// function preparingFood(order, callback){
//     console.log("Order assign to restuarent...")

//     setTimeout(()=>{
//         console.log("Order prepared done.");
//         const foodDetails = {token:15, restaurent:order.restaurent, location:order.location}
//         callback(foodDetails);
//     },3000)
// }
// function pickupFood(foodDetails, callback){
//     console.log("Delivery boy on the way to pickup order...")

//     setTimeout(()=>{
//         console.log("Order pickup sucessfully..");
//         const dropLocation = foodDetails.location;
//         callback(dropLocation);
//     },2000)
// }
// function deliveryOrder(dropLocation){
//     console.log("Delivery boy is near to your location")

//     setTimeout(()=>{
//         console.log("Order delivery sucessfully.");
//     },5000)
// }



function placeOrder(cart){
    console.log("Talking with Zomato...")

    const pr = new Promise(function(resolve,reject){
        let foodAvailability = true;
        if(foodAvailability){
        setTimeout(()=>{
            console.log("Order placed sucessfully.");
            const order = {orderId:251, food:cart, restaurent:"Dominos", location:"Bangalore"};
            resolve(order);
        },3000)
    }
    else{
        reject("Out of stock");
    }
    })
    return pr;
}
function preparingFood(order){
    console.log("Order assign to restuarent...")
    
    const pr = new Promise(function(resolve,reject){
        let staffAvailable = true;
        if(staffAvailable){
        setTimeout(()=>{
            console.log("Order prepared done.");
            const foodDetails = {token:15, restaurent:order.restaurent, location:order.location}
            resolve(foodDetails);
        },3000)
    }
    else{
        reject("Staff Not Available");
    }
    })
    return pr;
}
function pickupFood(foodDetails){
    console.log("Delivery boy on the way to pickup order...")

    const pr = new Promise(function(resolve,reject){
        const isCancelled = false;
        if(!isCancelled){
        setTimeout(()=>{
            console.log("Order pickup sucessfully..");
            const dropLocation = foodDetails.location;
            resolve(dropLocation);
        },2000)
    }
    else{
        reject("Customer cancelled order");
    }
    })
    return pr;
}
function deliveryOrder(dropLocation){
    console.log("Delivery boy is near to your location")

    setTimeout(()=>{
        console.log("Order delivery sucessfully.");
    },5000)
}

// this is callback function
// placeOrder(preparingFood);




// callback hell 
// placeOrder(cart, (order)=>{
//     preparingFood(order,(foodDetails)=>{
//         pickupFood(foodDetails, (dropLocation)=>{
//             deliveryOrder(dropLocation);
//         });
//     });
// });


// like this we can reselove this callback hell.
// if it is async task then it will create promises.
// const prom = placeOrder(cart);

// prom.then((order)=>{
//     preparingFood(order);
// }).then((foodDetails)=>{
//     pickupFood(foodDetails);
// }).then((dropLocation)=>{
//     deliveryOrder(dropLocation);
// }).catch((error)=>{
//     console.log(error);
// })





// for programmer this is not easy to remind.
// prom.then(order=>preparingFood(order))
// .then(foodDetails=>pickupFood(foodDetails))
// .then(dropLocation=>deliveryOrder(dropLocation))
// .catch(error=>console.log(error))

// use of async and await

// async function greet() {
//     const order =await placeOrder(cart);
//     // console.log(order);
//     const orderDetails =await preparingFood(order);
//     const dropLocation =await pickupFood(orderDetails);
//     deliveryOrder(dropLocation);   
// }


// const pro1= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("hello everyone");
//     },5000)
// })
// const pro2= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Second Promise");
//     },2000)
// })

function test1(){
    const pro1= new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("hello everyone");
        },5000)
    })
    return pro1;
}

function test2(){
    const pro2= new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Second Promise");
        },2000)
    })
    return pro2;
}


// like this whose time will finish that will execute.
// pro1.then(value => console.log(value))
// pro2.then(value => console.log(value))


// both will use same timing in this case but without completing one it will not go another line;
// async function geet() {
//     const data1 = await pro1;
//     console.log(data1);

//     const data2 = await pro2;
//     console.log(data2);
// }

// geet();


// after one function timing end then another will start. and 
// async function will always return Promise if will not return then it will return undefined;
async function geet(){
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
}

geet();



// this is the  syntax to create promise.
// const pr = new Promise(function(resolve,reject){

// })

// return pr;