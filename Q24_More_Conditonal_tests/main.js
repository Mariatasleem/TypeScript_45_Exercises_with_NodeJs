// Define Variables.
var apple = "apple";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruites = ["apple", "banana", "orange"];
//  Test for Euality with strings
console.log("Is apple equals to apple?");
console.log(apple == "apple");
//  Test for unequality with string.
console.log("\nIs apple is not equals to apple?");
console.log(apple != "apple");
// Tests using LowerCase Function.
console.log("\nIs APPLE is equal to apple after converting to lowerCase?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowerCase?");
console.log(upperCaseApple.toLowerCase() != "apple");
// Numerical Tests
// Equals to.
console.log("\n Is ten is equals to twenty?");
console.log(ten == twenty);
// Not Equals to.
console.log("\n Is ten is not equals to twenty?");
console.log(ten != twenty);
// Greater than.
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than.
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
// Greater than or equals to.
console.log("\nIs ten is greater than or equals to 5?");
console.log(ten >= 5);
// Less than or equals to.
console.log("\n twenty is less than or equals to 10?");
console.log(twenty <= 10);
// Tests Using "AND" & "OR" operators.
// Using && (and operator)
console.log("\n twenty is not equals to 10 & twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR operator)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in Array.
console.log("\n Is orange include in my fruits Array?");
console.log(fruites.includes("orange"));
// Test whether an item is not include in Array.
console.log("\n Is orange not include in my fruits Array?");
console.log(!fruites.includes("orange"));
