// Assignment Code
const generateBtn = document.querySelector("#generate");

const lowerCase = "abcdegfhijklmnopqrstuvwz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharac = "!@#$%&*/";
const lowerCaseArray = lowerCase.split("");
const upperCaseArray = upperCase.split("");
const numberArray = numbers.split("");
const SpecialCharacArray = specialCharac.split("");

//let arrayOfArrays 


let passwordLength = prompt("How long should the password be? 8 - 128 characters");
let upperCase = confirm("Do you want upper case?");
let lowerCase = confirm("Do you want lower case?");
let numbers = confirm("Do you want numbers?");
let SpecialCharac = confirm("Do you want special characters?");

if confirm.upperCase {
  
}
if confirm.lowerCase {

  
}if confirm.numbers {
  
  
}if confirm.specialCharac {

  
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
