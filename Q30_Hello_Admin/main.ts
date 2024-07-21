// Creating a Array
let userNames = ["Maria","Areeba", "Kinza", "Tehreem", "Admin"];

// Using forEach Loop on Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
     console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneUser},Thank you for logging in again. `)
    }
})