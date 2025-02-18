// Define a function to print each magician name from an array.
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Define an Array containing magicians name
let magician_names = ["Harry Poter","justin Willman","Criss Angel"]


// Making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice()

// Modify the copied Array to include "The Great" with their names.
let copy_great_magicians = make_great(copy_magician_names);

// Show both Arrays original & Copied

// Original
console.log("Original Array\n")
show_magician(magician_names);

console.log("\nCopied Array\n");
// Copied
show_magician(copy_great_magicians);


