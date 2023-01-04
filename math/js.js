// Math properties:

// Example

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


// Number to Integer

let x = 5.432;

Math.round(x);	    // Returns x rounded to its nearest integer
Math.ceil(x);	    // Returns x rounded up to its nearest integer
Math.floor(x);	    // Returns x rounded down to its nearest integer
Math.trunc(x);	    // Returns the integer part of x (new in ES6)
Math.sign(x);       // Returns if x is negative, null or positive (new in ES6)

Math.pow(8, 2);     // (= 64) Returns the value of x to the power of y
Math.sqrt(64);      // (= 8) Returns the square root of x
Math.abs(-4.7);     // (= 4.7) Returns the absolute (positive) value of x:

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);

Math.random();      // Returns a random number between 0 and 1:
Math.floor(Math.random() * 11); // Returns a random integer from 0 to 10:
Math.floor(Math.random() * 10); // Returns a random integer from 0 to 9:

// This JavaScript function always returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
getRndInteger(6, 10);

// This JavaScript function always returns a random number between min and max (both included):
function getRndInteger1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRndInteger1(6, 10);



Math.log(10);        // (= 2.302585092994046) Returns the natural logarithm of x / How many times must we multiply Math.E to get 10?
Math.log2(8);       // (= 3) Returns the base 2 logarithm of x / How many times must we multiply 2 to get 8?


