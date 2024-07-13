let dt = new Date();
/*date is a object in javascript */
// console.log(dt);
// console.log(dt.toString());
// console.log(dt.toLocaleDateString());
// console.log(dt.getUTCDate());
// console.log(dt.getUTCMinutes());
// console.log(typeof dt);

//let createdDate = new Date(2024, 0, 24);// to get specific date
//let createdDate = new Date(2024, 0, 24,5,23);// to get specific date & time.
let createdDate = new Date("2024-01-24");// use date pattern, when use as string 0 is not supported but in number date starts form 0.

let myTimeStamp = Date.now();// to get the timestamp
// console.log(createdDate.toDateString());
// console.log(myTimeStamp);
// console.log(createdDate.getTime());// It will return a timestamp
/*to comparing the dates we should compare it in miliseconds not in seconds. to compare in in milisconds need to take the floor value*/
//console.log(Math.floor(Date.now()/1000));

console.log(dt.getDay());
//`today date is{$dt.getDay}`

let myda= dt.toLocaleString('default', {
    weekday: 'short'
}
)
//short used for short name of the day
console.log(myda);



