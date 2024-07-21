// Creating an Array
let userNames = ["Maria", "Areeba", "Kinza", "Tehreem", "Admin"];

// Remove all values from our Array noe our Array is empty.
userNames = [];

// If Statement for checking length of our array is empty ?
if (userNames.length === 0) {
  console.log("Your Array is Empty we need to find some Users!");
} else {
  //if Array is not empty Use forEach Loop on Array
  userNames.forEach((oneUser) => {
    if (oneUser === "Admin") {
      console.log(`Hello ${oneUser}, Would you like to see a status report?`);
    } else {
      console.log(`Hello ${oneUser},Thank you for logging in again.`);
    }
  });
}
