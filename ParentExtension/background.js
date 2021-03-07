// Initialize Firebase
var config = {
  apiKey: '<AIzaSyByYtt9wPyLGORySDMcUc4-TciIvJvQ3b4>',
  databaseURL: '<https://assignment-tracker-hackitapart.firebaseio.com>',
  storageBucket: '<assignment-tracker-hackitapart.appspot.com>'
};
firebase.initializeApp(config);

function initApp() {
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
}

window.onload = function() {
  initApp();
};
