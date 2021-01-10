// Assignment code here
// Generate Random Password
alert("Welcome To the Random Password Generator!")
function generate() {

  // Set Password Length/Complexity
  let complexity= document.getElementById("slider").value;

  //Possible Password Values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

  let password = "";

  //Create For Loop To Choose Password Characters
  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //Add Password to Textbox/Display Area
  document.getElementById("password").value = password;

  //Set Default Length Display of 25
  document.getElementById("length").innerHTML = "Length: 25";

}