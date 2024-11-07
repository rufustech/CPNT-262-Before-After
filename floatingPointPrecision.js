// Floating-Point Precision: Control the total number of digits in the string representation of a number with a dedicated method.

let number = 12.47698242;
console.log("Before toPrecision" + number);

// Only returns the value of the number specified in(n).  
number = number.toPrecision(4);
console.log("After toPrecision" + number);
