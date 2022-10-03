// Array of options for computer to pick from
var options = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 20;
var password = " ";

// Assignment code here
var generatePassword = function() {
  // Ask user for their choice
var userChoice = window.prompt("How many characters would you like your password to contain?");

if (!userChoice) {
return;
}

var userChoice = window.prompt("Click okay to confirm including special characters.");


var userChoice = window.prompt("Click okay to confirm including numeric characters");


var userChoice = window.prompt("Click okay to confirm including lowercase characters");


var userChoice = window.prompt("Click okay to confirm including uppercase characters");


var index = Math.floor(Math.random() * options.length); 
console.log(index);
}

generatePassword();  

