// Creating a Guest List Array.
let guestList = ["Yusra", "Rabia", "Anum", "Minhal"];

// Making variable for those who can't come.
let cantCome = guestList[0];

// Print the name of Guest who cant come.
console.log(cantCome, "Cannot came for Dinner");

// Add or Remove values from Guest List Array.
guestList.splice(0, 1, "Arooma");

// Message print for Bigger Table
console.log("Good News ! We have found a Bigger Table for Dinner");

// Adding a new guest at starting index of array.
guestList.unshift("Waliha");

// Adding a new guest at ending index of array.
guestList.push("sana");

//  Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2)

// Adding one new guest at middle index of array.
guestList.splice(middleIndex, 0, "Laiba");

// Print Message of Updated List
console.log("Updated list of our Guests");

// Sending an invitation message to our guests one by one with their names.
guestList.forEach(oneGuest => console.log(`Hi...! ${oneGuest}, Would you like to Dinner with me ?`));

// Inform that only two guests invite for dinner.
console.log("Unfortunately, The New Dinner Table Won't Arrive on Time, So I can invite two Guests to Dinner with me :-(")

// Using While Loop to remove guests from the Array until only two names remain.
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I Can't invite you to Dinner`);
}
// Sending an invitation to the last two guests on th list
console.log("Invitations to the last 2 Guests");

guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo} you are still invited to Dinner`));

// Removing last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List,", guestList);