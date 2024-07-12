// 43. Unchanged Magicians: 
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Ali", "Ahmed", "Sumair", "Shohaib"];
var magiciancopy2 = __spreadArray([], magician, true);
function greet(greet) {
    var Withgreeting = "";
    for (var _i = 0, magiciancopy2_1 = magiciancopy2; _i < magiciancopy2_1.length; _i++) {
        var greeting = magiciancopy2_1[_i];
        Withgreeting += "".concat(greet, " , ").concat(greeting);
    }
    return Withgreeting;
}
var mygreet = greet("Hello");
var myarry = mygreet.split("/n");
console.log(myarry);
