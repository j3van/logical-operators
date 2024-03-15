// // Example. Create a random decimal number between 0 and 100.
// var random1 = Math.random() * 100;
// console.log(random1);

// // Example. Create integer between 0 and 10 (not including decimals)
// var random2 = Math.random() * 10;
// random2 = Math.floor(random2);
// console.log(random2);

// // Example. Create a random number between -5 and 5.
// // Range is (5-(-5)) = 10
// //Low # is -5
// var random3 = Math.random() * 10 + -5;
// random3 = Math.floor(random3);
// console.log(random3);

// // Example. Create a Delivery application that prompts for the length, width,
// var length = +prompt("Length?");
// var width = +prompt("Width?");
// var height = +prompt("Height?");

// // check if any dimentsion is larger than 10 and reject if so
// if (length > 10 || width > 10 || height > 10) {
//   alert("Regect");
// } else {
//   alert("Accept");
// }

// Example. Create a Va;id Grade application that asks the user to enter
// var grade = +prompt("Grade?");

// if (grade >= 0 && grade <= 100) {
//   alert("Grade submited");
// } else {
//   alert("Invalid grade");
// }

// // Example 1a
// var random5 = Math.random() * 1;
// console.log(random5);

// // Example 1b
// var random6 = Math.random() * 10;
// console.group(random6);

//Example 1d
// var random7 = Math.random() * 10 + 5;
// console.log(random7);

// // Example 1c
// number = Math.random() * 1000;
// number = Math.floor(number);
// console.log(number);

// // Example
// number = Math.random() * 3 + 1;
// number = Math.floor(number);
// console.log(number);

// // Example
// number = Math.random() * 150 ;
// number = Math.floor(number);
// console.log(number);

// Warm up
var userNum = parseInt(prompt("Enter a single diget number."));

// if (userNum >= 0 || userNum <= 9) {
//   alert("Thanks!");
// } else {
//   alert("Thats's not a single digit number");
// }

if (userNum < 0 || userNum > 9) {
  alert("Not a single digit number");
} else {
  alert("Thanks!");
}
