// Array of current users.
let current_users = ["Muhammad", "maria", "Uroosa","Ali","Usman"];

// Array of New users.
let new_users = ["Meerab", "Shafay", "Waliha", "Maria", "Muhammad"]

// Loop through new users to check for usernames availability
new_users.forEach(new_one_user => {

// Making a condition for username already exist and save in our_condition variable
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print Different messages using if-Else statements
    if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!!`)
    }
    else{
        console.log(`This username ${new_one_user} is available`)
    }
})