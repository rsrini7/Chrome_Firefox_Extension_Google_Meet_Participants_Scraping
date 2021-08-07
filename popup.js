var browser = browser || chrome
// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	if(navigator.userAgent.indexOf("Firefox")){
		browser.tabs.executeScript({
			file: 'payload.js'
		});
	}else{
		chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
			file: 'payload.js'
		});;
	}
});

// Listen to messages from the payload.js script and write to popout.html
browser.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message;
});