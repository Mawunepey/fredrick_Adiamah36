// Function to calculate budget
function calculateBudget(income, rent, groceries, savingsRate) {
    // Validate inputs
    if (income < 0 || rent < 0 || groceries < 0 || savingsRate < 0 || savingsRate > 1) {
      console.error("Income, rent, groceries must be non-negative, and savingsRate must be between 0 and 1.");
      return null;
    }
  
    // Calculate total expenses
    const totalExpenses = rent + groceries;
  
    // Calculate remaining income
    const remaining = income - totalExpenses;
  
    // Calculate savings amount
    const savings = remaining * savingsRate;
  
    // Calculate final balance
    const balance = remaining - savings;
  
    // Store results in budget object
    const budget = {
      totalExpenses: totalExpenses.toFixed(2),
      remaining: remaining.toFixed(2),
      savings: savings.toFixed(2),
      balance: balance.toFixed(2)
    };
  
    // Print budget object and summary
    console.log("Budget Summary:", budget);
    console.log(`Balance after savings: $${budget.balance}`);
  
    // Return budget object for further use
    return budget;
  }
  
  // Test case 1: Default values
  let income = 1000; // Monthly income
  let rent = 400; // Rent expense
  let groceries = 150; // Groceries expense
  let savingsRate = 0.2; // 20% of remaining income
  
  console.log("Test Case 1:");
  calculateBudget(income, rent, groceries, savingsRate);
  
  // Test case 2: Different values
  income = 2000;
  rent = 800;
  groceries = 300;
  savingsRate = 0.25; // 25% of remaining income
  
  console.log("\nTest Case 2:");
  calculateBudget(income, rent, groceries, savingsRate);