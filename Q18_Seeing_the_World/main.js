var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making an Array of countries and print its original order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// print the Array in Alphabetical Order without modifying the actual array
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its original order
console.log("Still in original Order:", countriesToVisit);
// Print the Array in Reversed order without modifying the Action array list.
console.log("Rverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its original order
console.log("Still in original Order:", countriesToVisit);
// We have changed the original Array order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the array to show that it's back to its original order
console.log("Back to original order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in Alphabetical order now.
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have changed again the original Array order now in reverse order again.
console.log("Original Array Reversed:", countriesToVisit.reverse());
