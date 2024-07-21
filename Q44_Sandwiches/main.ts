// Making a fuction with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(oneItem => console.log(oneItem));

    console.log("\nNow Enjoy your Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken","Cheese", "Mayo","Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Chicken","Mayo","Egg", "iceburg","Tomato");