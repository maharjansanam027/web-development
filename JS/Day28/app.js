
function placeOrder(callback){
    console.log("Talking with Zomato...")

    setTimeout(()=>{
        console.log("Order placed sucessfully.");
        callback();
    },2000)
}
function preparingFood(callback){
    console.log("Order assign to restuarent...")

    setTimeout(()=>{
        console.log("Order prepared done.");
        callback();
    },3000)
}

// pickupFood()=>{
// deliveryOrder();
//  }
function pickupFood(callback){
    console.log("Delivery boy on the way to pickup order...")

    setTimeout(()=>{
        console.log("Order pickup sucessfully..");
        callback();
    },2000)
}
function deliveryOrder(){
    console.log("Delivery boy is near to your location")

    setTimeout(()=>{
        console.log("Order delivery sucessfully.");
    },5000)
}

// this is callback function
// placeOrder(preparingFood);




// callback hell 
placeOrder(()=>{
    preparingFood(()=>{
        pickupFood(()=>{
            deliveryOrder();
        });
    });
});
