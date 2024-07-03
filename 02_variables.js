const accountNumber = 1803;
let accountEmail = "xyz@gmail.com";
var accountPassword = "XYZ";
accountCity = "kolkata";// declaring variable like this is posible but not preffered.

let accountState; // in javascript it's called undefined

//accountNumber = 2;
//console.log(accountNumber); This can't be executed. Const variable data can not be changed.

/*
Prefer not use var in javascript because it's issue with block scope and funtional scope.
*/
console.table([accountNumber,accountEmail,accountPassword,accountCity]);// this will show the data in tabuler format