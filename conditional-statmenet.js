// Conditional statements, expressions, or 
// simply conditionals are features 
// of programming languages that tell 
// the computer to execute certain actions, 
// provided certain conditions are met

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed.

// If Statement

// The most fundamental of the conditional statements is the if statement.
//  An if statement will evaluate whether a statement is true or false, 
//  and only run if the statement returns true. 
//  The code block will be ignored in the case of a false result,
//   and the program will skip to the next section.

// Example
// Set balance and price of item
const book = 500;
const jeans = 40;

// Check if there are enough funds to purchase item
if (jeans <= book) {
  console.log("You have enough money to purchase the item!");
}

// Else Statement

// With if statements, we only execute code when a statement evaluates to true,
//  but often we will want something else to happen
//   if the condition fails.

//Example

// Set balance and price of item
const balance = 500;
const phone = 600;

// Check if there is enough funds to purchase item
if (phone <= balance) {
	console.log("You have enough money to purchase the item!");
} else {
	console.log("You do not have enough money in your account to purchase this item.");
}


// Else if Statement

// With if and else, we can run blocks of code depending on whether
//  a condition is true or false. 
//  However, sometimes we might have 
//  multiple possible conditions and outputs, 
//  and need more than simply two options.

//Example

// Set the current grade of the student
let grade = 87;

// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}
