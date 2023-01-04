/*
object and array destructuring
With destructuring we can take apart an object or array incredibly easily
This has many use cases from making variable assignment much cleaner to the all important function argument destructuring.
*/

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


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function sumNmulti(a, b) {
    return [a + b, a * b, a / b];
}

const array = sumNmulti(2, 3);

console.log(array);     // [ 5, 6, 0.6666666666666666 ]

const [sum, multi, division = 'no division'] = sumNmulti(2, 3);   //(destructuring)

console.log(sum);   // 5
console.log(multi);     // 6
console.log(division); // no division(as default) / 0.6666666666666666


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const person1 = {
    name: 'sally',
    age: 22,
    address: {
        country: 'fafasfasf'
    },
    favoriteFood: 'pizza'
}
const person2 = {
    name: 'sonic',
    age: 32,
    address: {
        city: 'ikuyjh'
    }
}

const { name, age } = person1;
const { name: firstName, favoriteFood = 'rice', address: { city }, ...restData } = person2; //taking the name property from the person and it's mapping to 'firstName' / and we can add default values like favoriteFood

console.log(name);  // sally
console.log(age);   // 32
console.log(firstName);   // 32
console.log(favoriteFood);   // 32
console.log(city);   // ikuyjh
console.log(restData);   // { age: 32, address: { city: 'ikuyjh', country: 'yukt' } }

const person3 = { ...person1, ...person2 }; //merge/over written

console.log(person3);   // { name: 'sonic', age: 32, address: { city: 'ikuyjh' },  favoriteFood: 'pizza' }



// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function printuser(user) {
    console.log(`name is: ${user.name} age is: ${user.age}`)
}

printuser(person1);     //name is: sally age is: 22

function printuser1({ name, age }) {
    console.log(`name is: ${name} age is: ${age}`)
}

printuser1(person1);    //name is: sally age is: 22