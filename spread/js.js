/*
we can use spread operator (.../ three dots) to object and array destructuring ,merge arrays
*/


let line1 = ['dsafasf', 'safasfsaf', 'asfasfasf', 'fasfafsfa'];
let line2 = ['124214', '421412421', 2141241242, '12412412421'];
let line3 = line1.concat(line2);
let line4 = [...line1, ...line2, 'e3223dsed2', '32r23d32rd', '32d23rd32w'];

console.log(...line3);  //dsafasf safasfsaf asfasfasf fasfafsfa 124214 421412421 2141241242 12412412421
console.log(...line4);  //dsafasf safasfsaf asfasfasf fasfafsfa 124214 421412421 2141241242 12412412421 e3223dsed2 32r23d32rd 32d23rd32w


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

detail = function (name, number) {
    console.log('name is ' + name + '. age is ' + number);
}

detail('kamal', 16);    //name is kamal. age is 16

// ---------------------------------------------------------------------------------------------------

detail1 = function (name, number) {
    console.log('name is ' + name + '. age is ' + number);
}

let data = ['bimasdasd', 26];

detail1(data);  //name is bimasdasd,26. age is undefined

detail1.apply(null, data);   //name is bimasdasd. age is 26

detail1(...data);   //name is bimasdasd. age is 26


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let numbers = [9, 2, 1, 5];

console.log(Math.min(numbers)); //NaN (not a number)

console.log(Math.min(...numbers)); // 1


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const numbs = ['1', '2', '3', '4', '5', '6'];

// const let1 = letters[1];
// const let2 = letters[2];

const [let1, let2, , let4, ...rest] = letters;

console.log(let1);
console.log(let2);
console.log(let2);
console.log(rest);

/*
A
B
B
[ 'E', 'F', 'G' ]
*/



