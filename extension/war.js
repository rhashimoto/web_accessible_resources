'use strict';

// Get the extension ID from the WAR URL.
var extensionId = document.URL.split('/')[2];

// Listen for postMessage() events from an enclosing web page.
window.addEventListener('message', (e) => {
  // Relay the message to the extension.
  chrome.runtime.sendMessage(extensionId, e.data, (response) => {
    // Relay the extension's reply to the web page.
    e.source.postMessage(response, e.origin);
  });
});
