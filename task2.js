// Define the array with mixed data types
const values = [42, "hello", true, null, { name: "Bob" }, [1, 2], 3.14, "world", undefined];

// Function to validate and categorize variables by type
function categorizeTypes(values) {
  // Initialize counts object for each type
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    array: 0,
    null: 0,
    undefined: 0
  };

  // Loop through values to count types
  for (const value of values) {
    // Handle arrays separately since typeof returns "object"
    if (Array.isArray(value)) {
      typeCounts.array++;
    } else if (value === null) {
      typeCounts.null++;
    } else {
      // Use typeof for other types and increment corresponding count
      const type = typeof value;
      if (type in typeCounts) {
        typeCounts[type]++;
      }
    }
  }

  // Print the counts object
  console.log("Type Counts:", typeCounts);

  // Return counts for potential further use
  return typeCounts;
}

// Run the categorization
categorizeTypes(values);