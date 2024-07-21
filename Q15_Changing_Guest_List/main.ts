let guestList = ["Yusra", "Rabia", "Anum"];

let cantCome = guestList[2];

console.log(cantCome, " Cannat come for dinner ");

guestList.splice(2 , 1, "Arooma");

guestList.forEach(guest => console.log(`Hi...!! ${guest}, Would you like to Dinner with me ?`));
