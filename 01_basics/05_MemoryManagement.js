//-------------------------Memory Management-----------------------
/*
Java script does the work of garbage collection too.
In java script there are 2 type of memory allocation process is there.

Stack(Primitive datatypes), Heap(Non-primitive datatypes)
When we store a data in stack we will get a copy of that data. And if we store any data in heap we will get refference of it(Original data).
*/

let myName = "Sayan";
let newName = myName;
console.log(myName);
console.log(newName);

let myFun = {
    name: "sd",
    email: "sd@gmail.com"
};
let user = myFun; // It's stored in a heap memory so user refference is pointed to the same data
console.log(user);

user.name = "sayan";

console.log(user);// As refference data(original data) is changed in the heap memory "MyFun" output also changed
console.log(myFun);