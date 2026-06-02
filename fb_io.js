//firebase.database().ref('/info').set
/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;


function fb_authenticate() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      GLOBAL_user = result.user;
      let name = GLOBAL_user.displayName;
      let email = GLOBAL_user.email;
      console.log(name);
      console.log(email);


      document.getElementById("welcomeMessage").innerHTML =
        "Welcome to Sal’s Strawberry Saloon, " + name + "!";
      console.log(GLOBAL_user);
      // })
      // .catch(function (error) {
      //   console.log(error);
    });
}
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}


// Run when the login state of the user changes.
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; // Save the user object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}


// Run the Google login popup
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;  // Save the user object to a global variable
    console.log("User has logged in")
  });
}


function fb_error() {
}
function fb_write() {

  if (!GLOBAL_user) {
    alert("Please login first!");
    return;
  }

  let name = document.getElementById("name").value;
  let fruit = document.getElementById("favoriteFruit").value;
  let quantity = document.getElementById("fruitQuantity").value;

  firebase.database().ref("customers/" + GLOBAL_user.uid).push({
    name: name,
    favoriteFruit: fruit,
    quantity: quantity
  });

  console.log("Data saved!");
} 