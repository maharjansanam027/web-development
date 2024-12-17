const arr = [10,20,30,40,"sanam",true,"nanu"];

// how to access the value.

// it will not take the negative value.
// console.log(arr[2]);

// it is very helpful at function because it will take negative value also
// console.log(arr.at(4));

// const newarr = structuredClone(arr);

// console.log(newarr == arr);

// add element in last
// arr.push(50);

// delete element at last
// arr.pop();

// add element in start by unshift

// arr.unshift("bro")

// arr.shift();

// delete operation


// dont use this operation for delete
// delete arr[1]



// console.log(arr.indexOf(30));
// console.log(arr.lastIndexOf(30));
// console.log(arr.includes(30));

// now time for slice function

// it will not change in original array

// console.log(arr);
// console.log(arr.slice(2,4));

// splice function crete new array and it will change in orginal array.
// console.log(arr);
// console.log(arr.splice(2,4));



// another functionality of splice function.

// splice(starting_index,total_element_delete,add elemet from starting_index)
arr.splice(2,3,"hello","boss");

// toString() and join()


console.log(arr.toString());

// join will give advantage to add ayting between element
console.log(arr.join("*"));



// concatination

// adding to new array conctinate

let arr1= [1,2,3]
let arr2= [10,20,30]
let arr4 = ["sanam","rj"]
let arr3=arr1.concat(arr2,arr4);

// for concationation there is another one also that is push function
// if we use push function then it will convert into 2d array

// arr1.push(arr2);


// this is the way to initilize 2d array
// let arr1 = [[1,2,3],[4,5,6],[7,8,9]]


// 3d array in js and how to access
// let arr1 = [[1,2,3,[10,20,30]],[4,5,6],[7,8,9]]


// let arr1 = [[1,2,3,[10,20,30]],[4,5,6],[7,8,9]]

// convert 3d array into 1d array by using falt method.
// console.log(arr1.flat(Infinity));


// check it was array or not by using isArray method.
// console.log(Array.isArray(arr));


// it is not recommended becauuse if we put one value then it will take size of array if more then array.
// let arr1 = new Array(10,20);
// console.log(arr1);



