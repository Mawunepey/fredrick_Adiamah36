// Initial array of tasks
const tasks = [
    { name: "Study", priority: 3 },
    { name: "Shop", priority: 1 },
    { name: "Call", priority: 2 }
];

// Closure to create a task counter
const taskCounter = (() => {
    let count = 0;
    return () => {
        count++;
        return count;
    };
})();

// Arrow function to prioritize tasks
const prioritizeTasks = (tasks, minPriority = 1) => {
    return tasks
        .filter(task => task.priority >= minPriority)
        .sort((a, b) => b.priority - a.priority);
};

// Test cases with different minimum priorities
const testCases = [
    { minPriority: 2 }, // Should include Study (3), Call (2)
    { minPriority: 1 }  // Should include Study (3), Call (2), Shop (1)
];

// Run tests and print results
testCases.forEach(test => {
    const callCount = taskCounter();
    const prioritized = prioritizeTasks(tasks, test.minPriority);
    console.log(`Call ${callCount}:`);
    console.log(prioritized);
});