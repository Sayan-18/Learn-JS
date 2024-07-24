/* In js The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

**In JavaScript, arrays aren't primitives but are instead Array objects

**JavaScript arrays are resizable and can contain a mix of different data types. 

**JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes. eg: array["zero"] - can't access like this only can be access by number indexing.

**JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

**A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. */

const myArray = [1, 2, 3, 5, 23, 56];
console.log("A :", myArray);

//Array methods

// myArray.push(10);
// myArray.push(12);
// console.log(myArray);
// myArray.pop();
//myArray.unshift(99);// it will add the data in starting of the array.
//myArray.shift();// It removes the element from the begining of the array.

//console.log(myArray.includes(20));// will check the element is exists within the array or not.
//console.log(myArray.indexOf(23));// Will find the index of array element.

// const newArray = myArray.join();// In will add two array element but whole array will be converted into String.
// console.log(newArray);
// console.log(typeof(newArray));

newArray2 = myArray.slice(1, 3);
console.log(newArray2);
console.log("B :", myArray);
newArray3 = myArray.splice(1, 3);
console.log(newArray3);
console.log("C :", myArray);
