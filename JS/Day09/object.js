// // how to create object.


// // so this is why array is a object. key value pairs same like array.
// // jesa he humm object ko access karta haa wa se hee array ko bhi access karta haaa

// // BTS for this is :
// // const arr = new Array(10,20,30)

// // const arr = {
// //     0:10,
// //     1:20,
// //     2:30
//         // length:3
// // }

// // everything key values is store in string.

// // const obj = {
// //     0:10,
// //     2:20,
// //     3:30,
// //     name:"sanam",
// //     address:"Godawari lalitpur",
// //     account_number:2025546,
// //     "gender":"Male",
// //     undefined:30
// // }

// // console.log(obj[undefined]);


// // 2nd method to create object.

// // const str = new Object();

// // add, delete and modify

// // str.name = "sanam";
// // str.age = 20;
// // str.gender="Male";

// // delete str.age;

// // console.log(str);



// // third way to create object

// // this way has advantage because no need to type key every time

// // class Person{
// //     constructor(name,age,gen){
// //         this.name = name;
// //         this.age = age;
// //         this.gen = gen;
// //     }
// // }

// // const per1 = new Person("sanam",50,"male");
// // const per2 = new Person("sam",20,"male");

// // console.log(per1, per2);


// // how to access the keys and values from object


// const str = {
//         id:125,
//         name:"sanam",
//         address:"Godawari Lalitpur",
//         phone:95656565
// }

// // it will return an array
// // it use mostly use while make website 
// // const arr = Object.keys(str);
// // console.log(arr);

// // accessing both keys and values

// // const arr = Object.entries(str);
// // console.log(arr);

// // Assign use case

// // const str1 ={a:1,b:2,c:3}
// // const str2 ={d:1,e:2,f:3}
// // const str3 ={x:1,y:2,z:3}

// //                         target,source1,source2.......       changed in target
// // if we changed in str4 then it wiil not changed in str1.
// // const str4 = Object.assign({},str1,str2,str3);
// // console.log(str4);

// // there is another case to assign by using sprade operator.

// // const str1 ={a:1,b:2,c:3}
// // const str2 ={d:1,e:2,f:3}
// // const str3 ={x:1,y:2,z:3}

// // this is how we use sprade operator
// // const str4 = {...str1,...str2,...str3};

// console.log(str4);

// const str1 = {
//         id : 50,
//         name : "sanam"
// }

// Object.freeze(str1);
// str1.id=20;
// console.log(str1);

// Object.seal()

const str1 = {
        id:20,
        name:"sanam"
}

Object.seal(str1);
str1.id = 50;
console.log(str1.id);
delete str1.id;

console.log(str1.id)

