// Array of current users.
var current_users = ["Muhammad", "maria", "Uroosa", "Ali", "Usman"];
// Array of New users.
var new_users = ["Meerab", "Shafay", "Waliha", "Maria", "Muhammad"];
// Loop through new users to check for usernames availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using if-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
