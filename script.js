// Assignment Code do not put the variable before the function
var generateBtn = document.querySelector("#generate");
var generateSelect = document.querySelector("#password");

const lowercaseCharacters = "abcdegfhijklmnopqrstuvwz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!@#$%&*/";

function generatePassword() {

  let passwordArray = []

  let isLengthInvalid = true;


    let passwordLength = parseInt(prompt("Password must be between 8 and 128 characters."));

    console.log(passwordLength);


    if (passwordLength < 8 || passwordLength > 128) {
      let passwordLength = alert("Please choose between 8 and 128 characters.");
    } 
    else {
      isLengthInvalid === true;
    }

    
    let lowercaseConfirm = window.confirm("Do you want lower case letters?");

    let uppercaseConfirm = window.confirm("Do you want upper case letters?");

    let numericalConfirm = window.confirm("Do you want numbers letters?");

    let specialConfirm = window.confirm("Do you want special characters?");

    if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
      alert("You must choose one to generate password.")
    }

    for (var i = 0; passwordArray.length < passwordLength; i++) {

      if (lowercaseConfirm === true && passwordArray.length <= passwordLength) {
        let lowercaseInput = lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
        passwordArray.push(lowercaseInput);
        console.log(passwordArray.length)
      } else {
        lowercaseConfirm = false;
      }
 
      if (uppercaseConfirm === true && passwordArray.length < passwordLength) {
        let uppercaseInput = uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
        passwordArray.push(uppercaseInput);
        console.log(passwordArray)
      } else {
        uppercaseConfirm = false;
      }
 
      if (numericalConfirm === true && passwordArray.length < passwordLength) {
        let numericalInput = numericalCharacters.charAt(Math.floor(Math.random() * numericalCharacters.length));
        passwordArray.push(numericalInput);
        console.log(passwordArray)
      } else {
        numericalConfirm = false;
      }
 
      if (specialConfirm === true && passwordArray.length < passwordLength) {
        let specialInput = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        passwordArray.push(specialInput);
        console.log(passwordArray)
      } else {
        specialConfirm = false;
      }


        let passwordCharacters = passwordArray.join("");
        return passwordCharacters


        // Write password to the #password input
        function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");

          passwordText.value = password;

        }
