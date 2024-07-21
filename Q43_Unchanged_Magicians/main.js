// Define a function to print each magician name from an array.
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an Array containing magicians name
var magician_names = ["Harry Poter", "justin Willman", "Criss Angel"];
// Making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied Array to include "The Great" with their names.
var copy_great_magicians = make_great(copy_magician_names);
// Show both Arrays original & Copied
// Original
console.log("Original Array\n");
show_magician(magician_names);
console.log("\nCopied Array\n");
// Copied
show_magician(copy_great_magicians);
