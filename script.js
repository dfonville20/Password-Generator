// Assignment Code
const generateBtn = document.querySelector("#generate");

const lowerCase = "abcdegfhijklmnopqrstuvwz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharac = "!@#$%&*/";
const lowerCaseArray = lowerCase.split("");
const upperCaseArray = UpperCase.split("");
const numberArray = numbers.split("");
const SpecialCharacArray = specialCharac.split("");

//let arrayOfArrays 

function generatePassword() {
    let passwordLength = prompt("How long should the password be?");

} 



// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
