// Assignment Code
var generateBtn = document.querySelector("#generate");

// This is the object that holds the password characters
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxy",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbols: "~`!@#$%^&*()-_+={}|[]\:\";'<>?,/."
};


// Write password to the #password input
function writePassword() {



  var password = generatePassword();
  // Print the text to the #password textarea
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // This is the character pool we will be creating
  var passwordCharacters = "";

  // Determine password length
  var passwordLength = prompt("Choose a password length between 8 and 128");
  if (passwordLength < 8  || passwordLength > 128) {
    // If no password length is chosen we return the page
      return;
  };

  // Confirm if we want lowercase letters
  var lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    // If yes, add them to the character pool
    passwordCharacters += characters.lowercase;
  };

  // Confirm if we want uppercase letters
  var uppercase = confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    // If yes, add them to the character pool
    passwordCharacters += characters.uppercase;
  };

  // Confirm if we want numbers
  var number = confirm("Would you like to use numbers?");
  if (number) {
    // If yes, add them to the character pool
    passwordCharacters += characters.number;
  };


  // Confirm if we want symbols
  var symbols = confirm("Would you like to use symbols?");
  if (symbols) {
    // If yes, add them to the character pool
    passwordCharacters += characters.symbols;
  };

  // Create the password
  var password = "";
  for (var i = 0; i < passwordLength;  i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  };

  return password;
};



