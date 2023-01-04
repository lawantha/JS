// turnery operator (if then)

const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

// switches

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('no color specified');
        break;
}

// arrow function 

// function addNums(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNums(2 + 3));

const addNums = (num1, num2) =>
    console.log(num1 + num2);

addNums(2 + 3);

// no need to add return 

const addNums1 = (num1, num2) => num1 + num2;

console.log(addNums1(2 + 3));

