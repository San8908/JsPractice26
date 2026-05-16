// Template literals
let name = "Alice";
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Hello, my name is Alice and I am 25 years old.

// Escape sequence characters
let fruites = "I like \"mangoes\" and \"bananas\".";
console.log(fruites); // I like "mangoes" and "bananas".

let path = "C:\\Users\\Alice\\Documents";
console.log(path); // C:\Users\Alice\Documents

console.log( name , ' and ' , fruites); // Alice  and  I like "mangoes" and "bananas".

// \n for new line
let multiline = "This is line 1.\nThis is line 2.";
console.log(multiline);
/*
This is line 1.
This is line 2.
*/

// \t for tab
let tabbed = "Name:\tAlice\nAge:\t25";
console.log(tabbed);
/*
Name:   Alice
Age:    25
*/

// String methods
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase()); // hello, world!
console.log(str.includes("World")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
console.log(str.indexOf("o")); // 4 (first occurrence of 'o')
console.log(str.lastIndexOf("o")); // 8 (last occurrence of 'o')
console.log(str.slice(0, 5)); // Hello (from index 0 to 5, excluding 5)
console.log(str.replace("World", "Everyone")); // Hello, Everyone!
console.log(str.split(", ")); // ["Hello", "World!"] (split by comma and space)
console.log(str.trim()); // Hello, World! (removes whitespace from both ends)
console.log(str.charAt(0)); // H (character at index 0)
console.log(str.charCodeAt(0)); // 72 (ASCII code of 'H')
console.log(str.repeat(2)); // Hello, World!Hello, World! (repeats the string 2 times)
console.log(str.slice(-6)); // World! (last 6 characters)
console.log(str.substring(0, 5)); // Hello (similar to slice but does not accept negative indices)
console.log(str.substr(7, 5)); // World (from index 7, get 5 characters)
console.log(str.concat(" How are you?")); // Hello, World! How are you? (concatenates strings)
console.log(str.slice(2)); // llo, World! (from index 2 to the end)
console.log(str.slice(0, -1)); // Hello, World (from index 0 to the second last character)
console.log( 'Hi'+' there!'); // Hi there! (string concatenation using + operator)

// String immutability
let original = "Hello";
let modified = original.toUpperCase();
console.log(original); // Hello (original string remains unchanged)
console.log(modified); // HELLO (new string created by toUpperCase)

original[0] = 'h'; // Attempting to change the first character of the string
console.log(original); // Hello (string is immutable, so it remains unchanged)