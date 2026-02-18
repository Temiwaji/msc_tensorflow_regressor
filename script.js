console.log("Hello World!, welcome to JS Review");
// alert("Welcome to JS Review");
// variable declaration
const firstName = "Afam";
const lastName = "Okonkwo";
const val = 34;
let isMale = true;
const fullName = firstName + " " + lastName;
console.log("My full name is " +fullName);

const arr = [
    "AfamO",
    34,
    true,
    null
]
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log ("Explicit type: "+typeof(explicit));
console.log("implict type: "+typeof(implicit));

//comparison of values using comparison operator
const a = 42;
const b = 22;
console.log(a == b);
console.log(a <= b);

let testA =(a <=42)
let testB =(a === '42')
console.log(testA && testB);
console.log(testA || testB);
console.log(!testA);

let age = 42;
let canDrive = age > 16? 'yes': 'no';
console.log("can I drive? "+canDrive);


// New Codes
let quartile = 25;
// Determine the quartile based on the value of 'quartile' variable
switch(quartile) {
    case 25:
        console.log("First quartile");
        break;
    case 50:
        console.log("Second quartile");
        break;
    case 75:
        console.log("3rd Quartile");
        break;
    default:
        console.log("You are in the 4th quartile")
}

// functions- by declaration

function addTwoNumbers(a, b) {
    return a + b;
}
// function by expression
const addtwoNumbers = function(a, b) {
    return a + b;
}
console.log(addTwoNumbers(2,3));
console.log(addtwoNumbers(2,4));

// arrow functions
const greet = () => console.log("Hello World!")
const logger = (val) => console.log("Logged DATA:: "+val);
const sum = (a, b) => a + b;
logger("ERROR 121-System shut down")