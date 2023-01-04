const numbers = new Array(1, 2, 3, 4, 5, 6); //using constructor

const array1 = ['dsad', 'dasd', 'qwdasda'];

array1[4] = 'mango';

array1.push('fsdvv'); //add value to the end
array1.push('41234312');

array1.unshift('front'); //insert value to the front

array1.pop(); //remove last value

console.log(Array.isArray(array1)); //checks its array is available

console.log(array1.indexOf('mango')); //to get the index fo a value

console.log(numbers);
console.log(array1);



// javascript program to demonstrate use of circular
// array using extra memory space


function print(a, n, ind) {

    // Create an auxiliary array
    // of twice size.
    var b = Array(2 * n);

    // Copy a to b two times
    for (i = 0; i < n; i++)
        b[i] = b[n + i] = a[i];
    console.log(b);
    // print from ind-th index to
    // (n+i)th index.
    for (i = ind; i < n + ind; i++)
        document.write(b[i] + " ");
}

// Driver code

var a = ['A', 'B', 'C', 'D', 'E', 'F', 'd', 'f', 'a'];
var n = 6;
print(a, n, 3);


// :::::::::::::::::::::::::circular array::::::::::::::::::::::::::

arr_limit = 5;
arr_index = 0;

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
var arrr = [];

if ((arr.length) >= arr_limit) {
    for (i = 0; i < arr.length; i++) {
        arrr[arr_index] = arr[i];
        arr_index = (arr_index + 1) % arr_limit;
    }
}
else {
    arrr.push(arr[i])
}

console.log(arrr);