let name = "sayan"
let repoCount = 50
//console.log(name + repoCount + "value"); this is an older form of concatinating strings mostly won't use in js now a days

console.log(`my name is ${name} and my repo count is ${repoCount}`);
//this is called string interpolation. in which we can do on the go changes in strings

const myName = new String('Sayan');// another way to declare a string

console.log(myName[0]);
console.log(myName.length);
console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('y'));
console.log(myName.substring(1, 3));// substring can't use negetive value. If used it will start counting from 0.
console.log(myName.slice(-4, 3));// Slice can use negetive value. - will start count from end.

let newString = "    Sayan    ";
console.log(newString);
console.log(newString.trim());// Trims the white spaces and empty lines.

let url = "https://sayan%20datta.com";
console.log(url.replace('%20', '_'));
console.log(url.includes('sayan'));// search fo series of charcters 