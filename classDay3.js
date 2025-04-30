/**
 * Calculates the area of a rectangle (width * height).
 * @param {number} width - The width of the rectangle.
 * @param {number} [height=1] - The height of the rectangle (default is 1).
 * @returns {number} The area of the rectangle.
 */

// Function Declaration
function calculateArea(width, height = 1) {
    return width * height;
}

// Arrow Function
const calculateAreaArrow = (width, height = 1) => width * height;

// Test cases with different inputs
const testCases = [
    { width: 5, height: 3 },      // Normal case: 5 * 3 = 15
    { width: 5 },               // Using default height: 5 * 1 = 5
    
    // { width: 2, height: 0 },     // Edge case: 2 * 0 = 0
    // { width: 7.5, height: 2.5 }, // Decimal case: 7.5 * 2.5 = 18.75
];

// Test Function Declaration
console.log("Testing Function Declaration:");
testCases.forEach(test => {
    const area = calculateArea(test.width, test.height);
    console.log(`Width: ${test.width},
         Height: ${test.height ?? 1}, 
         Area: ${area}`);
});

// Test Arrow Function
console.log("\nTesting Arrow Function:");
testCases.forEach(test => {
    const area = calculateAreaArrow(test.width, test.height);
    console.log(`Width: ${test.width},
         Height: ${test.height ?? 1},
          Area: ${area}`);
});




// question 2
// Global variable
let message = "Global greeting";

// Arrow function with default parameter and local variable
const sayHello = (name = "User") => {
    let message = "Hello from function"; 
    return `${message}, ${name}!`;
};

// Print global message
console.log("Global message:", message);

// Call sayHello with and without arguments
console.log("Calling sayHello with argument:", sayHello("Fred"));
console.log("Calling sayHello without argument:", sayHello());