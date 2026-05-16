function onePlusAvg(x, y) {
    return 1 + (x + y) / 2; 
    // bracket is used to change the precedence of operators 
    // here we want to first add x and y and then divide by 2 
    // and then add 1 to the result of that division
}
// arrow function
const sum = ( a, b) => {
    return a+b;
}

const hi = () =>{
    console.log("Hi");
}

let result = onePlusAvg(10, 20);
console.log(result); // 16
console.log(sum(10, 20)); // 30
hi(); // Hi 
let y = hi; // here we are assigning the function hi to the variable y
y(); // Hi here we are calling the function hi using the variable y
