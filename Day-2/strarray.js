/* String and Array methods for Q. 2 */

// String methods
let daystr = "mon tues wednes thurs fri satur sun";
let days = daystr.split(" ");   // Split the string into an array

console.log("The original string:");
console.log(daystr);
console.log("\nSplitting into an array:");
console.log(days);

console.log('\nAppending "day" to form complete day names:');
days.forEach(function(day, i) {
    days[i] = day.concat("day");
});
console.log(days);

console.log("\nCapitalising names:");
days.forEach(function(day, i) {
    days[i] = day[0].toUpperCase() + day.slice(1);
});
console.log(days);

console.log("\nGenerate short day names:");
let dayshort = [];
days.forEach(function(day, i) {
    dayshort[i] = day.substr(0,3);
});
console.log(dayshort);

console.log("\nPrint days starting with 'S':");
days.forEach(function(day) {
    if(day.startsWith('S')) {
        console.log(day);
    };
});

console.log("\nSunday is Funday:");
days.push(days.pop().replace('S','F'));
console.log(days);

console.log("\nPrint the names of weekdays in a string:");
console.log(days.slice(0,5).join());