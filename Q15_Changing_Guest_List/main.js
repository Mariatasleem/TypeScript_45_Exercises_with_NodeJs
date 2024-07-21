var guestList = ["Yusra", "Rabia", "Anum"];
var cantCome = guestList[2];
console.log(cantCome, " Cannat come for dinner ");
guestList.splice(2, 1, "Arooma");
guestList.forEach(function (guest) { return console.log("Hi...!! ".concat(guest, ", Would you like to Dinner with me ?")); });
