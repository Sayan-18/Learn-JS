const score = 100;
const bal = new Number(200);// Strictly making the value as number.
//console.log(score);
//console.log(bal);//will be showing as number in console
//console.log(bal.toString().length);//converting it into string
//console.log(bal.toFixed(2));//making the result till 2 decimal point.

//const othervalue = 123765755575.5789;
//console.log(othervalue.toPrecision(12));
//console.log(othervalue.toLocaleString('en-IN'));

//-----------------Maths----------------

console.log(Math);
console.log(Math.abs(-123));
console.log(Math.round(123.5));
console.log(Math.ceil(123.5));
console.log(Math.floor(123.5));
console.log(Math.min(1, 2, 3, 4, 5, 6));
console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log("---------------------------------");
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));
let min = 10;
let max = 20;
console.log(Math.floor((Math.random() * (max-min)) + min));
