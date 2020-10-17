// this is the generate password button
let generateBtn = document.querySelector("#generate");

let allChars = {
  lowerLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialChars: [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
}
// gets filled after we test our password for passing all criteria 
let passString = "";
// generates random password string
function generatePassword(length, isLower, isUpper, isNumber, isSpecial) {

  //combines all the requested characters used in the password into one array
  let totalContent = [];

  if (isLower) {
    for (let i = 0; i < allChars.lowerLetters.length; i++) {
      totalContent.push(allChars.lowerLetters[i]);
    }
  }
  if (isUpper) {
    for (let i = 0; i < allChars.upperLetters.length; i++) {
      totalContent.push(allChars.upperLetters[i]);
    }
  }
  if (isNumber) {
    for (let i = 0; i < allChars.numbers.length; i++) {
      totalContent.push(allChars.numbers[i]);
    }
  }
  if (isSpecial) {
    for (let i = 0; i < allChars.specialChars.length; i++) {
      totalContent.push(allChars.specialChars[i]);
    }
  }

  let passCriteria = [isLower, isUpper, isNumber, isSpecial];
  let criteriaCheck = passCriteria.includes(true);
  // tests password minimum requirements
  if (criteriaCheck === true && length > 7 && length < 129) {

    let finalPass = [];

    for (let i = 0; i < length; i++) {
      let randomChar = totalContent[Math.floor(Math.random() * totalContent.length)];
      finalPass.push(randomChar);
    }
    // calls test function on the generated password
    let hasChars = characterTest(finalPass.join(""), isLower, isUpper, isNumber, isSpecial);
    //returns generated password if test passes and ends function
    if (hasChars === true) {
      passString = finalPass.join("");
      return;
    }
    else {
      generatePassword(length, isLower, isUpper, isNumber, isSpecial);
    }
  }

  else {
    alert("You either did not select any criteria for your password or your password is smaller than 8 or larger than 128 characters long.  Try again");
    main();
  }
}
// test for generated password
function characterTest(password, isLower, isUpper, isNumber, isSpecial) {
  // counts how many types of criteria is used in the password
  let chars = 0;
  if (isLower) {
    chars++;
  }
  if (isUpper) {
    chars++;
  }
  if (isNumber) {
    chars++;
  }
  if (isSpecial) {
    chars++;
  }
  let lowerChecked = 0;
  let upperChecked = 0;
  let numberChecked = 0;
  let specialChecked = 0;
  let checkedChars = 0;
// adds types of criteria found in the password
  for (let i = 0; i < password.length; i++) {
    if (allChars.lowerLetters.join("").includes(password[i]) && lowerChecked === 0) {
      lowerChecked++;
      checkedChars++;
    }
    else if (allChars.upperLetters.join("").includes(password[i]) && upperChecked === 0) {
      upperChecked++;
      checkedChars++;
    }
    else if (allChars.numbers.join("").includes(password[i]) && numberChecked === 0) {
      numberChecked++;
      checkedChars++;
    }
    else if (allChars.specialChars.join("").includes(password[i]) && specialChecked === 0) {
      specialChecked++;
      checkedChars++;
    }
  }
// tests if the amount of types of criteria used in the password equals how many types of criteria was requested
  if (chars === checkedChars) {
    return true;
  }
  else {
    return false;
  }
}
// The start of the main function triggered by clicking button
function writePassword(password) {
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function main() {
  // series of prompts getting info for the password
  let passLengthPrompt = prompt("How many characters? Min: 8 Max: 128");
  // this is taking the string entered in the previous prompt and converting it into a number
  let passLength = parseInt(passLengthPrompt);
  alert("Time to select your password criteria!  Password must include at least one of the following:  lowercase letters, uppercase letters, numbers or special characters.");
  let passLower = confirm("Do you want lowercase letters in your password? Ok = Yes Cancel = No");
  let passUpper = confirm("Do you want uppercase letters in your password? Ok = Yes Cancel = No");
  let passNumeric = confirm("Do you want numeric characters in your password? Ok = Yes Cancel = No");
  let passSpecial = confirm("Do you want special characters in your password? Ok = Yes Cancel = No");
  generatePassword(passLength, passLower, passUpper, passNumeric, passSpecial);
  writePassword(passString);
}

generateBtn.addEventListener("click", main);
