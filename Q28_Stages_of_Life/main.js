// Cearting Variable
var age = 25;
// Creating a program for Determining the stage of life using if-Else chain
if (age < 2) {
    console.log("You are a Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("You are a Toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("You are a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You are an Adult.");
}
else if (age >= 65) {
    console.log("You are Elder.");
}