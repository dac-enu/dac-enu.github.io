function fingerprintDemo() {

	const testButton = document.getElementById("testButton");
	testButton.remove();

	const variousBrowserPropertiesHeader = document.createElement("h3");
	variousBrowserPropertiesHeader.innerHTML = "Various Browser Properties";	document.getElementById("primaryContent").appendChild(variousBrowserPropertiesHeader)

	let browserUserAgent = navigator.userAgent;
	const userAgentText = document.createElement("p");
	userAgentText.textContent = "Browser user agent string: " + browserUserAgent;
	document.getElementById("primaryContent").appendChild(userAgentText)

	const systemPropertiesHeader = document.createElement("h2");
	const geolocationHeader = document.createElement("h2");
	
	let browserAppCodeName = navigator.appCodeName;
	const browserAppCodeNameText = document.createElement("p");
	browserAppCodeNameText.textContent = "Browser application codename: " + browserAppCodeName;
	document.getElementById("primaryContent").appendChild(browserAppCodeNameText)

	let browserEngine = navigator.product;
	const browserEngineText = document.createElement("p");
	browserEngineText.textContent = "Browser engine: " + browserEngine;
	document.getElementById("primaryContent").appendChild(browserEngineText)

	let browserLanguage = navigator.language;
	const browserLanguageText = document.createElement("p");
	browserLanguageText.textContent = "Browser language: " + browserLanguage;
	document.getElementById("primaryContent").appendChild(browserLanguageText)

	let browserCookieEnabled = navigator.cookieEnabled;
	const browserCookieEnabledText = document.createElement("p");
	browserCookieEnabledText.textContent = "Cookies enabled: " + browserCookieEnabled;
	document.getElementById("primaryContent").appendChild(browserCookieEnabledText)

	let browserPlatform = navigator.platform;
	const browserPlatformText = document.createElement("p");
	browserPlatformText.textContent = "Browser platform: " + browserPlatform;
	document.getElementById("primaryContent").appendChild(browserPlatformText)

	const timezone = new Date().getTimezoneOffset();
	const timezoneText = document.createElement("p");
	timezoneText.textContent = "Timezone offset from UTC (minutes): " + timezone;
	document.getElementById("primaryContent").appendChild(timezoneText);

	let hardwareThreads = navigator.hardwareConcurrency;
	const hardwareConcurrencyText = document.createElement("p");
	hardwareConcurrencyText.textContent = "CPU threads: " + hardwareThreads;
	document.getElementById("primaryContent").appendChild(hardwareConcurrencyText)

	let deviceMemory = navigator.deviceMemory;
	const deviceMemoryText = document.createElement("p");
	deviceMemoryText.textContent = "System memory: " + deviceMemory + " GB";
	document.getElementById("primaryContent").appendChild(deviceMemoryText)

	let doNotTrack = navigator.doNotTrack;
	const doNotTrackText = document.createElement("p");
	doNotTrackText.textContent = "Do not track enabled (1 = yes, 0 = no): " + doNotTrack;
	document.getElementById("primaryContent").appendChild(doNotTrackText)

	// if (navigator.geolocation) {
	//	navigator.geolocation.getCurrentPosition(showPosition);
	//} else {
	//	document
	//}
	//}
}
