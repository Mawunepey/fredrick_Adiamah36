// Function to create a memoized factorial calculator
const createFactorial = () => {
    // Closure: Cache object to store results
    const cache = {};

    // Arrow function to calculate factorial
    return (n) => {
        // Validate input: Must be a positive integer
        if (!Number.isInteger(n) || n < 0) {
            return "Invalid input";
        }

        // Check cache
        if (n in cache) {
            return cache[n];
        }

        // Calculate factorial iteratively
        if (n === 0 || n === 1) {
            cache[n] = 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            cache[n] = result;
        }

        return cache[n];
    };
};

// Create factorial function
const factorial = createFactorial();

// Test cases
const testInputs = [3, 5, 3, -1, 2.5, 0];

// Print results using template literals
testInputs.forEach(input => {
    const result = factorial(input);
    console.log(`Factorial(${input}): ${result}`);
});