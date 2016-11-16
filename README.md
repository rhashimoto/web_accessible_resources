# web_accessible_resources
This is a proof of concept for using
[Web Accessible Resources](https://developer.chrome.com/extensions/manifest/web_accessible_resources)
to relay messages from a web page to a Chrome extension.

To use it:

1. Activate Chrome Developer Mode and load the unpacked extension
from extension/. Note the extension ID.

2. Modify page/index.html to configure the `iframe` element `src`
attribute with the extension ID from step 1.

3. Using a local web server, use Chrome to open page/index.html.

When you open the page, it should send the string "hello" to the
extension. The extension will reverse the string and send it back
to the web page.
