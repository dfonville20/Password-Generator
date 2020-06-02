// Assignment Code do not put the variable before the function
const generateBtn = document.querySelector("#generate");

const lowerCase = "abcdegfhijklmnopqrstuvwz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharac = "!@#$%&*/";


//let arrayOfArrays 

let passwordLength = prompt("How long should the password be?", "8 - 128 characters");
if (passwordLength < 8 || passwordLength > 128) {
  let passwordLength = alert("Invalid selection, 8 - 128 characters only." <br> "Please try again.");
console.log(passwordLength)
let passwordUpperCase = confirm("Do you want upper case?");
let passwordLowerCase = confirm("Do you want lower case?");
let passwordNumbers = confirm("Do you want numbers?");
let passwordSpecialCharac = confirm("Do you want special characters?");

for (var i = 0; passwordArray.length < passwordLength; i++) {

if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
  alert("Please choose at least one character type to generate password.")


if (passwordUpperCase === true && passwordArray.length < passwordLength) {
  let uppercaseInput = uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
  passwordArray.push(uppercaseInput);
} else {
  uppercaseConfirm = false;
}

if (passwordLowerCase === true && passwordArray.length <= passwordLength) {
  let lowercaseInput = lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
  passwordArray.push(lowercaseInput);
} else {
  lowercaseConfirm = false;
}

if (passwordNumbers === true && passwordArray.length < passwordLength) {
  let numericalInput = numericalCharacters.charAt(Math.floor(Math.random() * numericalCharacters.length));
  passwordArray.push(numericalInput);
} else {
  numericalConfirm = false;
}

if (passwordSpecialCharac === true && passwordArray.length < passwordLength) {
  let specialInput = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
  passwordArray.push(specialInput);
} else {
  specialConfirm = false;
}

let passwordCharacters = passwordArray.join ("");
  return passwordCharacters


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
