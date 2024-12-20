// shallow copy

// const obj = {
//     id:45,
//     name:"sanam"
// }

// const obj1 = obj;

// obj1.id = 30;

// console.log(obj);

// console.log(obj1);



// deep copy
// const obj = {
//     id:45,
//     name:"sanam"
// }

// const obj1 = structuredClone(obj);

// obj1.id = 30;

// console.log(obj);

// console.log(obj1);


// nested object

// const str = {
//     id:10,
//     name:"Sanam",
//     address:{
//         pincode:560091,
//         location:"bangalore"
//     }
// }

// const str1 = Object.assign({},str);        //nested one will be swallow copy by using assign or sprade 
// str1.id = 50;           //deep copy

// str1.address.pincode=500084;    //swallow copy

// console.log(str);
// console.log(str1);

// destructuring

const obj = {
    id:20,
    name:"sanam",
    "address":"bangalore"
}

// const {id, address}=obj;      //this is one way to destructuring

// const {id:roll, name:naaaam}= obj;   this is another way 

// console.log(roll,naaaam);

// const {id, name, ...obj1}= obj;           this is another way 

// console.log(obj1);



// destructuring on array

const arr = [1,2,3,4];

const [first,second, ,third]=arr;
console.log(first, second, third)




