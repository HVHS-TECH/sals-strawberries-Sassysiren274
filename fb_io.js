/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
function fb_authenticate(){
    // authenticate with Google
}

function fb_error(){
    // Don't forget your error handling!
}
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;  // Save the user details object to a global variable
    console.log("User has logged in")
  });
}

  //firebase.database().ref('/info').set
