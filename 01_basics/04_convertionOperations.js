let score ;

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score); //changing string to number. 
//console.log(typeof valueInNumber);//In javascript in string if it's not a proper number then also it's converts to number but actual value will be NaN.
//console.log(valueInNumber);

//For above code bellow will be the output for different scenarios.
/*
33=>33 - number->number
"33"=> 33 - string -> number
"33abc" => NaN - string -> NaN
true => 1 ; false => 0 - boolean -> number
undefined => NaN - undefined -> NaN
null => 0 - null -> number.
**NaN-> it represents "Not a number" but type is number
*/

let isboolean = "sayan";
let convertToBool = Boolean(isboolean);
//console.log(typeof convertToBool);
//console.log(convertToBool);

//Boolean convertion
/*
1 => true - number->boolean
0 => false - number->boolean
" "(empty string) => false- string ->boolean
"string" => True - string ->boolean
*/

let someString = 100;
let convetToString = String(someString);// number converted into string
console.log(convetToString);
console.log(typeof convetToString);


//**********Operations**********/

// console.log("2" > 1);
// console.log(2 > "1");
// console.log("2" + 1 + 2);
// console.log(2 + 4 + "2");

// When there is mismatch is datatype, we should not perform any comparison or conversion related task

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//Here, The reason == and >,<, <=,>= is working differntly, Comparison conver null to a number, treating as 0. That's why (3) null >= 0 is true and (1) null>0 is false.

//===(strict check)
/*
=== this will not only check the value, It will also check the datatype of the variables
*/