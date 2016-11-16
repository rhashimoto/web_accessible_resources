'use strict';

chrome.runtime.onMessage.addListener((message, sender, reply) => {
  // Reply with reversed string (proving data was received).
  var reversed = message.split('').reverse().join('');
  reply(reversed);
});
