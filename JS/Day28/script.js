
function fetchdata(callback){
    console.log("Fetched info of user");
    setTimeout(()=>{
        console.log("Data fetch successful");
        // let name = "Rohit";
        let obj = {
            name:"sanam",
            address:"nepal",
            age:25
        }
        callback(obj);
        // greet(name);
        // meet(name);
    },2000)
}

function meet(obj){
    console.log(`hello ${obj.name} lets meet in Ktm.`);
}

function greet(obj){
    console.log(`hello ${obj.name}`);
}

fetchdata(meet);

