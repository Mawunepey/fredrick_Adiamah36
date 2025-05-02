// Arrow function to flatten a nested object
const flattenObject = (obj, prefix = '') => {
    // Validate input
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid input: Must be a non-null object";
    }

    // Initialize result object
    let result = {};

    // Iterate over object keys
    for (const [key, value] of Object.entries(obj)) {
        // Create new key with dot notation
        const newKey = prefix ? `${prefix}.${key}` : key;

        // If value is a nested object, recurse
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            result = { ...result, ...flattenObject(value, newKey) };
        } else {
            // Assign non-object value to result
            result[newKey] = value;
        }
    }

    return result;
};

// Test cases
const testCases = [
    {
        input: {
            user: {
                name: "Alice",
                age: 25,
                address: {
                    city: "New York",
                    zip: 10001
                }
            },
            active: true
        }
    },
    {
        input: {
            product: {
                id: 1,
                details: {
                    name: "Laptop",
                    price: 1000
                }
            }
        }
    },
    {
        input: {} 
    },
    {
        input: "not an object" 
    },
    {
        input: [1, 2, 3] 
    }
];

// Run tests and print results
testCases.forEach((test, index) => {
    const result = flattenObject(test.input);
    console.log(`Test ${index + 1}:`);
    console.log(`Input: ${JSON.stringify(test.input, null, 2)}`);
    console.log(`Result: ${typeof result === 'string' ? result : JSON.stringify(result, null, 2)}`);
    console.log("");
});





// task2
// Arrow function to group array items by a specified key
const groupBy = (arr, key) => {
    // Validate inputs
    if (!Array.isArray(arr)) {
        return "Invalid input: First argument must be an array";
    }
    if (typeof key !== 'string' || key.trim() === '') {
        return "Invalid input: Key must be a non-empty string";
    }

    // Use reduce to group items
    return arr.reduce((result, item) => {
        // Check if item has the key
        if (!(key in item)) {
            return result; // Skip items missing the key
        }

        // Get the key value
        const keyValue = item[key];

        // Initialize array for this key if not exists, and append item
        return {
            ...result,
            [keyValue]: [...(result[keyValue] || []), item]
        };
    }, {});
};

// Test cases
const testCases = [
    {
        arr: [
            { id: 1, category: "Electronics", name: "Laptop" },
            { id: 2, category: "Clothing", name: "Shirt" },
            { id: 3, category: "Electronics", name: "Phone" },
            { id: 4, category: "Clothing", name: "Pants" }
        ],
        key: "category"
    },
    {
        arr: [
            { id: 1, stock: 5, name: "Laptop" },
            { id: 2, stock: 0, name: "Phone" },
            { id: 3, stock: 5, name: "Tablet" }
        ],
        key: "stock"
    },
    {
        arr: [], // Empty array
        key: "category"
    },
    {
        arr: "not an array", // Invalid array
        key: "category"
    },
    {
        arr: [{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }],
        key: "" // Invalid key
    }
];

// Run tests and print results
testCases.forEach((test, index) => {
    const result = groupBy(test.arr, test.key);
    console.log(`Test ${index + 1}:`);
    console.log(`Input Array: ${JSON.stringify(test.arr, null, 2)}`);
    console.log(`Key: ${test.key}`);
    console.log(`Result: ${typeof result === 'string' ? result : JSON.stringify(result, null, 2)}`);
    console.log("");
});