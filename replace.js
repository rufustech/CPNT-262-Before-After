//Replace: There are methods that allow you to substitute parts of a string with new content.

let toBeReplaced = "I will be Different";

console.log("Before Sting: " + toBeReplaced);

//Running .replace to change the value in variable

toBeReplaced = toBeReplaced.replace(
  "I will be Different",
  "I am new Now, Born Again Hahahaha"
);
console.log("After string: " + toBeReplaced);
