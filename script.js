// Array of options for computer to pick from
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordOptions = ["numbers", "lowerCase", "specialCharacters", "upperCase"];
var passwordLength = 20;
var password = " ";

//var generateBtn = document.querySelector("#generate");
//var generatePassword = generatePassword();

// Assignment code here
var generatePassword = function () {
  // Ask user for their choice
  var userChoice = window.prompt("How many characters would you like your password to contain?");

  if (!userChoice) {
    return;
  }

  var special = window.prompt("Click okay to confirm including special characters.");


  var userChoice = window.prompt("Click okay to confirm including numeric characters");


  var userChoice = window.prompt("Click okay to confirm including lowercase characters");


  var userChoice = window.prompt("Click okay to confirm including uppercase characters");

  if (!userChoice) {
    return;

  }

  // Write password to the #password input
  //var passwordText = document.querySelector("#password");
  //var passwordGen = document.generatePassword("password");
  //var passwordOptions = options[numbers, lowerCase, specialCharacters, upperCase];

  //if (userChoice) = yes
  var passwordOptions = ["numbers", "lowerCase", "specialCharacters", "upperCase"];
  var writePassword = function () {
    for (var i = 0; i < passwordOptions.length; i++) {
      var passwordOptions = Math.floor(Math.random() * passwordOptions.length);
      password += options.substring(randomNumber, randomNumber + 1);
      getAlphaNumericString(n);
    }
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    var generateBtn = document.querySelector("#generate");
    var passwordText = document.querySelector("#password");

  }
  //console.log(passwordOptions);
  // Add event listener to generate button
  //document.getElementById[password];
  //document.generatePassword("password").value = password;
  //passwordText.value = password;
  //generateBtn.addEventListener("click", writePassword);
  //alert(generatePassword)(20);
}

generatePassword();

