//Extract Substring (): Methods are available to extract a portion of a string based on a starting position and the desired length.
let longWord = "uncharacteristically";
console.log("Before subString: " + longWord);

//use substring to limit cut off the characters, you can define start and end of the cut off
longWord = longWord.substring(2, 11);
console.log("After substring: " + longWord);
