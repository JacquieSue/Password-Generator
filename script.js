var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var options = ["number","lowerCase","specialCharacters","upperCase"];
  // numbers: numbers,
  // lowerCase: lower,
  // specialCharacters: special,
  // upperCase: upper

var passwordLength = 20;
var password = getPasswordOptions;

// Assignment code here
var getPasswordOptions = function () {
  // Ask user for their choice
  var userChoice = window.prompt("How many characters would you like your password to contain?");

  if (!userChoice) {
    return;
  }

  var special = window.confirm("Click okay to confirm including special characters.");


  var numberic = window.confirm("Click okay to confirm including numeric characters");


  var lower = window.confirm("Click okay to confirm including lowercase characters");


  var upper = window.confirm("Click okay to confirm including uppercase characters");


  var options = []

  if (special) {
    options.push(...specialCharacters);
  }

  if (numberic) {
    options.push(...numbers);
  }
  if (lower) {
    options.push(...lowerCase);
  }

  if (upper) {
    options.push(...upperCase);
  }
  console.log(options)

  for (var i = 0; i < getPasswordOptions; i++) {
    var options = Math.floor(Math.random() * options.length);
    options = options.substring(randomOptions, randomOptions + 1);
  }

  return " ";
}


var writePassword = function () {
  var password = getPasswordOptions()
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}



generateBtn.addEventListener("click", writePassword);
getPasswordOptions();
// generatePassword();
