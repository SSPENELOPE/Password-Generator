// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxy",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};


// Write password to the #password input
function writePassword() {
  var passwordCharacters = "";
  var passwordLength = prompt("Choose a password length between 8 and 128");
  if (passwordLength) {
  } else {
    return;
  }

  var lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharacters += characters.lowercase;
  };

  var uppercase = confirm("would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharacters += characters.uppercase;
  };

  var number = confirm("Would you like to use numbers?");
  if (number) {
    passwordCharacters += characters.number;
  };

  var symbols = confirm("Would you like to add symbols?");
  if (symbols) {
    passwordCharacters += characters.symbols;
  };


  var password = "";
  for (var i = 0; i <= passwordLength-1; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*var password = generatePassword(); {
  password = "";
  for (var i = 0; i <= passwordLength; i++) {
    password = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
};*/