"use strict";
//  Maling a Function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} size shirt with ${printMessage} prints on shirt`);
}
// Calling a Function with by default values
make_shirt();
// Calling a function now with medium size & default print meessage
make_shirt("Medium");
// Calling a function now with small size & different print 
make_shirt("Small", "I love javascript");
