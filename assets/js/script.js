// Assignment code here
var AskPassLength;
var CheckPassLength;
var password = "";
var passArray = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specCharsArray =   ["\[", "\!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\-", "=", "\[", "\]", "{", "}", ";", '\'', ":", '"', "\\", "|", ",", ".", "<", ">","\/", "?", "\]", "+", "\;"];

var PassLength = function () {
  passArray = [];
  AskPassLength = prompt("Please enter your password length (from 8 to 128characters).");
  CheckPassLength = parseInt(AskPassLength);
  if(CheckPassLength < 8 || CheckPassLength > 128) {
    PassLength();
  }
  else if (!CheckPassLength) {
    return PassLength();
  }

  var confirmLowerCase = window.confirm("Do you want to include Lower Case characters?");
  var confirmUpperCase = window.confirm("Do you want to include Upper Case characters?");
  var confirmNumb = window.confirm("Do you want to include numbers?");
  var confirmSpecChar = window.confirm("Do you want to include special characters?");
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumb && !confirmSpecChar) {
    window.alert("You need to confirm at least 1 option")
    PassLength();
  }
  if (confirmLowerCase) {
    passArray.push.apply(passArray, lowerCaseArray);
  }
  
  if(confirmUpperCase) {
    passArray.push.apply(passArray, upperCaseArray);
  }
  
  if(confirmNumb) {
    passArray.push.apply(passArray, numbersArray);
  }
  
  if(confirmSpecChar) {
    passArray.push.apply(passArray, specCharsArray);
  }
}

function generatePassword() {
  password = "";
  PassLength();
  for ( i=0; i < CheckPassLength; i++) {
    var randomChar = passArray[Math.floor(Math.random()*passArray.length)];
    password = password.concat(randomChar);
    }
    
  return password;
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

