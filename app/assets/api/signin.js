exports.signin = function(args, callback, callbackError) {

	var URL = "http://thriggle.com/rest/login";
	var params = {
		email : args.email,
		password : args.password,
	};

	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("POST", URL);
	xhr.send(params);

	xhr.onload = function(e) {
		var json = this.responseText;
		var response = JSON.parse(json);
		callback(e);

	};
	xhr.onerror = function(e) {
		callbackError(e);
	};
};

