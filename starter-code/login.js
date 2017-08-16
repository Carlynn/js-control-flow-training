console.log("login.js loaded");

//Create a userLogin object with one key for a user's name and one key for the user's password.
let userLogin = {userName: 'Carlynn', password: '1234'};

let login = function() {
    for (let i=0; i < 3; i++) {
    let promptNow = prompt("Enter password for " + userLogin.userName + ".")
    if (promptNow === userLogin.password) {
      alert("Security Check Passed!");
      return;
    }
    else {
      alert("Try Again") };
    }

};

  login();
