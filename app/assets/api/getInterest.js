exports.getInterest = function(callback, callbackError) {

	var URL = "http://www.thriggle.com/api/interests/default";

	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("GET", URL);

	xhr.send();

	xhr.onload = function(e) {
		var json = this.responseText;
		var response = JSON.parse(json);
		callback(response);

	};
	xhr.onerror = function(e) {
		alert(e);
		callbackError(e);
	};
};

