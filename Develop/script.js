// Variables Used 
var generateBtn = document.querySelector("#generate");
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@][\^_`{|}~";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts user to verify password length (between 8 and 128 characters)

function verifyLength() {
  var verifyLength = prompt("Please specify how many characters you want your password to contain. (8 - 128 characters)");

  // verify length is a valid number.
  while (isNaN(verifyLength)) {
    alert("Enter a valid number.");
    var verifyLength = prompt("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  }
  
  // verify length is between 8 and 128 characters.
  while (verifyLength < 8 || verifyLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    var verifyLength = prompt("Please specify how many characters you want your password to contain. (8 - 128 characters)");
  } 
  
  return Number(verifyLength);
} 

function generateRandomString(passwordLength, passwordCharacters) {
  // randomizes characters with specified length
  let confirmedPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let random =[Math.floor(Math.random() * passwordCharacters.length)];
    confirmedPassword = confirmedPassword + passwordCharacters[random];
  }
  return confirmedPassword;
}

function generatePassword() {
  const passwordLength = verifyLength();
  var passwordCharacters = "";

  var verifyUppercase = verifyLowercase = verifyNumbers = verifySpecial = false;
  var count = 0; 

  // loops to previous prompt if no selected criteria 
  while (verifyUppercase === false && verifyLowercase === false && verifyNumbers === false && verifySpecial === false) {
    if (count > 0) {
      alert("At least one criteria must be selected");
    }
  
    verifyUppercase = confirm("Do you want uppercase characters in your password?");
    verifyLowercase = confirm("Do you want lowercase characters in your password?");
    verifyNumbers = confirm("Do you want numbers in your password?");
    verifySpecial = confirm("Do you want special characters in your password?");

    count++
  }

  // Arrays to create selections for password criteria 

  if (verifyUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters);
  }
  if (verifyLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters);
  }
  if (verifyNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }
  if (verifySpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }

  return generateRandomString(passwordLength, passwordCharacters)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
