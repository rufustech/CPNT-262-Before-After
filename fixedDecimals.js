//Fixed Decimals: You can create a string representation of a number with a fixed number of decimal places using a specific method.

let number = 8.34239742422123;
console.log("Before toFixed: " + number);

//converts to Decimal places that you specify in (n)
number = number.toFixed(2);
console.log("After toFixed: " + number);
