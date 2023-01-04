// ::::::::::: Fibonacci ::::::::::::

console.log('\n::::::::::: Fibonacci ::::::::::::\n');

function fibona(n) {
    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibona(6));


// ::::::::::: Factorial  ::::::::::::

console.log('\n::::::::::: Factorial  ::::::::::::\n');

function facto(n) {
    let result = 1;

    for (let i = 2; i < n; i++) {
        result = result * i;
    }
    return result;
}

console.log(facto(5));


// ::::::::::: Prime  ::::::::::::

console.log('\n::::::::::: Prime  ::::::::::::\n');


function prime(n) {
    if (n < 2) {
        return false;
    }
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(prime(5));



