// Assignment code here
// Generate Random Password
alert("Welcome To the Random Password Generator!")
function generate() {

  // Set Password Length/Complexity
  //let complexity= document.getElementById("slider").value;
  let complexity = prompt("What Length Do You Want The Password To Be?")

  //Possible Password Values
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let useUpperCase = confirm("Do You Want to Include Uppercase Letters?")
  let numbers = "1234567890"
  let useNumbers = confirm("Do You Want to Include Numbers?")
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  let useLowerCase = confirm("Do You Want To Include Lowercase Letters?")
  let specialSymbols = "!@#$%^&*()_+"
  let useSpecialSymbols = confirm("Do You Want To Include Special Symbols?")
  //let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
  let values = ""
  if (useUpperCase) {
    values += upperCase
  }
  
  if (useNumbers) {
    values += numbers
  }

  let password = "";
  
  if (useLowerCase) {
    values += lowerCase
  }
  
  if (useSpecialSymbols) {
    values += specialSymbols
  }

  //Create For Loop To Choose Password Characters
  for (var i = 0; i < complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //Add Password to Textbox/Display Area
  document.getElementById("password").value = password;

  //Set Default Length Display of 25
  document.getElementById("length").innerHTML = "Length: 25";

}