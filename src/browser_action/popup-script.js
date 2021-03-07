// Get reference to background page.
const bgPage = chrome.extension.getBackgroundPage();
// Sign in with popup, typically attached to a button click.
bgPage.signInWithPopup();
