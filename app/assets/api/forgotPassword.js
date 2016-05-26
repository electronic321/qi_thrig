exports.forgotPassword = function(args, callback, callbackError) {

	var URL = "http://thriggle.com/api/users/forgotPassword/?email=" + args.email;
	var params = {
		email : args.email,
	};

	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("GET", URL);
	xhr.send();

	xhr.onload = function(e) {
		var json = this.responseText;
		var response = JSON.parse(json);
		alert(response);
		callback(response);

	};
	xhr.onerror = function(e) {
		callbackError(e);
	};
};
