// Create the button
var button = document.createElement("button");
button.innerHTML = "Google Calendar";

// Append to header
var header = document.querySelector('.post__header');
header.appendChild(button);

// Add event handler
button.addEventListener ("click", function() {
  var data = {
    title: document.querySelector('.post__title').textContent,
    url: window.location.href,
  }
  chrome.runtime.sendMessage(data, function(response) {
    console.log('response', response);
  });
});
