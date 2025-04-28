// Define the shopping cart array with at least 3 items
const cart = [
    { name: "Shirt", price: 20, quantity: 2 },
    { name: "Pants", price: 35, quantity: 1 },
    { name: "Shoes", price: 50, quantity: 3 }
  ];
  
  // Function to calculate cart totals
  function calculateCartTotal(cart) {
    let subtotal = 0;
    let totalQuantity = 0;
  
    // Loop through cart to calculate subtotal and total quantity
    for (const item of cart) {
      subtotal += item.price * item.quantity;
      totalQuantity += item.quantity;
    }
  
    // Determine discount rate
    let discountRate = 0;
    if (totalQuantity > 10) {
      discountRate = 0.20; // 20% discount
    } else if (totalQuantity > 5) {
      discountRate = 0.10; // 10% discount
    }
  
    // Calculate discount amount and final total
    const discountAmount = subtotal * discountRate;
    const finalTotal = subtotal - discountAmount;
  
    // Print results
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Discount: $${discountAmount.toFixed(2)} (${(discountRate * 100)}%)`);
    console.log(`Final Total: $${finalTotal.toFixed(2)}`);
  
    // Return results for potential further use
    return { subtotal, discountAmount, finalTotal, totalQuantity };
  }
  
  // Run the calculation
  calculateCartTotal(cart);