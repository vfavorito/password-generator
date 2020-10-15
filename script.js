// Assignment Code
let generateBtn = document.querySelector("#generate");

// The start of the main function triggered by clicking button
function writePassword() {
  // series of prompts getting info for the password
  let passLengthPrompt = prompt("How many characters? Min: 8 Max: 128");
  // this is taking the string entered in the previous prompt and converting it into a number
  let passLength = parseInt(passLengthPrompt);
  alert("Time to select your password criteria!  Password must include at least one of the following:  lowercase letters, uppercase letters, numbers or special characters.");
  let passLower = confirm("Do you want lowercase letters in your password? Ok = Yes Cancel = No");
  let passUpper = confirm("Do you want uppercase letters in your password? Ok = Yes Cancel = No");
  let passNumeric = confirm("Do you want numeric characters in your password? Ok = Yes Cancel = No");
  let passSpecial = confirm("Do you want special characters in your password? Ok = Yes Cancel = No");
  // objects of each criteria for password and whether or not they are being used
  let lowerLetters = {
    used:passLower,
    content:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
  }
  let upperLetters = {
    used:passUpper,
    content:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  }
  let numbers = {
    used:passNumeric,
    content:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  let specialChars = {
    used:passSpecial,
    content:[" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","[","\\","]","^","_","`","{","|","}","~",]
  }
// this is combining all the requested characters used in the password into one array
  let totalContent =[];
  if (lowerLetters.used===true){
    for (let i = 0; i < lowerLetters.content.length; i++) {
      totalContent.push(lowerLetters.content[i]);
    }
  }
  if (upperLetters.used===true){
    for (let i = 0; i < upperLetters.content.length; i++) {
      totalContent.push(upperLetters.content[i]);
    }
  }
  if (numbers.used===true){
    for (let i = 0; i < numbers.content.length; i++) {
      totalContent.push(numbers.content[i]);
    }
  }
  if (specialChars.used===true){
    for (let i = 0; i < specialChars.content.length; i++) {
      totalContent.push(specialChars.content[i]);
    }
  }
  console.log(totalContent)
  let passCriteria = [passLower, passUpper, passNumeric, passSpecial];
  let criteriaCheck = passCriteria.includes(true);
  function generatePassword() {
    if (criteriaCheck === true && passLength > 7 && passLength < 121){
      
    }
    else {
      alert("You either did not select any criteria for your password or your password is smaller than 8 or larger than 120 characters long.  Try again");
      writePassword();
    }
  }
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
