let str = "hello this is sanam kya bolti public. \\n this is emiway bantai malum haa na";


let special ="sanam";

let str1 = "sanam";
let str2 ="maharjan";

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.charAt(2));


// serching in string;

let hero = "hello coder army. kesa coder ho sab log";

console.log(hero.indexOf("coder"))
console.log(hero.lastIndexOf("coder"));
console.log(hero.includes("Coder"));


// extracting substring

// slice and substring and substr function

let nam = "sanammaha";
           123456789
    -8-7-6-5-4-3-2-1           


        //    slice can take negative index
// console.log(nam.slice(2,6));

console.log(nam.slice(-4,9))


// substring canot take negative index
console.log(nam.substring(2,6));

// console.log(nam.substr())

// Replacing stings

let str10 = "Hello World, kya bolti hello World";

console.log(str10.replaceAll("World","Boss"));


// Spilliting strings

console.log("..................................");

// making into arrays
let str11 = "chennai!bangaloer!pune";
console.log(str11.split("!"));


let bro = " hello bro ";
console.log(bro.trim());
console.log(bro.trimStart().length);


// making string into object and store into object.

const str5 = new String("Hello coder Armmy");



console.log(str5);
console.log(typeof str5);
