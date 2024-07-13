/*
In javascript mainly we can differntiate datatype into 2 types.m primitive and non-primitive data type. Basically how data is stored in the database according to that it is devided.

#Primitive

There are 7 type of primitive datatype in javascript.
String, number,boolean,null, undefined,Symbol

#undefined: value havn't decided yet, variable declared, memrory space declared but what value will be assigned not decided.

#symbol: to make any element uniqe. mostly used in advance js. when in frontend need to make any element unique.

eg: let id=symbol('123')
let Anotherid=symbol('123')
even both symbol data is same but not equal.

BigInt: use for scientific value or big mathematical calculations.

#Refference (Non-primitive)

Array, Objects, Functions

*/

//Refference (Non-primitive)
const heros = ['saktiman', 'krish', 'flying jaat'];
// this all are reffernce type.
let myObj = {
    name: "Sayan",
    age: 22
};

//Whatever inside the curly braces is an object. it can be anything evem another object

let myFunction = function () {
    console.log("Function")
}

