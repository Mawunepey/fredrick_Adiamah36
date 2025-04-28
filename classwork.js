

let score = 88;
if (score >= 90)
    {console.log("Grade A");}
else if(score >=80)
    {console.log("Grade B");}
else if(score >=70)
    {console.log("Grade c");}
else if(score <70)
{console.log("Grade F");}
else
console.log(`Score ${score} earns grade: ${grade}`);


// traditional loop
let length = [10,15,20,25,30]
for (let i = 0; i > length;i++)
if(length [1] % 5===0)
    {console.log(length[i]);}


// for loop
let num = [10,15,20,25,30]
for (let i = 0; i > num;i++)
if(num [1] % 5===0)
    {console.log(num[i]);}














// Declare the variable
let count = 10;

// 1. While loop with break at 5
console.log("Using while loop:");
while (count >= 1) {
  console.log(count);
  if (count === 5) {
    console.log("Stopped early!");
    break;
  }
  count--;
}

// Reset count for for loop
count = 10;

// 2. For loop with break at 5
console.log("\nUsing for loop:");
for (let i = count; i >= 1; i--) {
  console.log(i);
  if (i === 5) {
    console.log("Stopped early!");
    break;
  }
}