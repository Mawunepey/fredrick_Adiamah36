


// number analyser

// Declare the array
const numbers = [12, -5, 20, 7, -3, 15, 8];

// Function to analyze the numbers
function analyzeNumbers(numbers) {
  // Initialize variables for analysis
  let positiveCount = 0;
  let evenSum = 0;
  let maxNumber = numbers[0]; 

  // Use for...of loop to iterate through numbers
  for (const num of numbers) {

    // Count positive numbers
    if (num > 0) {
      positiveCount++;
    }

    // Sum even numbers
    if (num % 2 === 0) {
      evenSum += num;
    }

    // Find maximum number
    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  // Store results in analysis object
  const analysis = {
    positiveCount,
    evenSum,
    maxNumber
  };

  // Print analysis object using template literal
  console.log(`Analysis Results:
  Positive Count: ${analysis.positiveCount}
  Sum of Even Numbers: ${analysis.evenSum}
  Maximum Number: ${analysis.maxNumber}`);

  // Return analysis object for further use
  return analysis;
}

// Run the analysis
analyzeNumbers(numbers);



// prime number finder
// Declare the limit
const limit = 20;

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to find prime numbers up to the limit
function findPrimes(limit) {
  // Initialize array to store prime numbers
  const primes = [];

  // Loop from 2 to limit to check for primes
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  // Print each prime number using forEach and template literal
  primes.forEach(prime => {
    console.log(`Prime number: ${prime}`);
  });

  // Return primes array for further use
  return primes;
}

// Run the prime number finder
findPrimes(limit);





// unique character counter
// Declare the string
const text = "Hello World";

// Function to count unique letters (case-insensitive)
function countUniqueLetters(text) {
  // Initialize object to store character counts
  const charCounts = {};

  // Convert to lowercase and filter non-letters
  const cleanedText = text.toLowerCase().replace(/[^a-z]/g, '');

  // Use for...of loop to count unique letters
  for (const char of cleanedText) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Print the counts object using template literal and JSON.stringify
  console.log(`Unique letter counts: ${JSON.stringify(charCounts, null, 2)}`);

  // Return counts object for further use
  return charCounts;
}

// Run the character counter
countUniqueLetters(text);



// fizz buzz with custom rules
// Declare the rules and limit
const rules = { 3: "Fizz", 5: "Buzz", 7: "Bang" };
const lim = 21;

// Function to generate FizzBuzz with custom rules
function fizzBuzz(rules, limit) {
  // Create array of numbers from 1 to limit
  const numbers = Array.from({ length: lim }, (_, i) => i + 1);

  // Process each number using forEach
  numbers.forEach(num => {
    // Check divisibility and concatenate matching strings
    let output = "";
    for (const [divisor, word] of Object.entries(rules)) {
      if (num % divisor === 0) {
        output += word;
      }
    }

    // Use the number if no rules apply
    const result = output || num;

    // Print result using template literal
    console.log(`${result}`);
  });

  // Return numbers array for potential further use
  return numbers;
}

// Run the FizzBuzz program
fizzBuzz(rules, limit);