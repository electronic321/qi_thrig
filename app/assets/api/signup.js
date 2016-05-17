exports.signup = function(args, callback, callbackError) {

	if (args.accountType == "consumer") {
		var URL = "http://thriggle.com/rest/signup";
		var params = {

			full_name : args.username,
			email : args.email,
			zipcode : args.zipcode,
			password : args.password,
			confirm_password : args.verifyPassword,
		};
	} else {
		var URL = "http://thriggle.com/rest/businessSignup";
		var params = {
			full_name : args.username,
			email : args.email,
			zipcode : args.zipcode,
			password : args.password,
			confirm_password : args.verifyPassword,
			phone : args.phoneNumber,
			address1 : args.streetAddress,
			category_name : args.categoryName,
			category_id : Alloy.Globals.catid,

		};
	}

	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("POST", URL);
	xhr.send(params);

	xhr.onload = function(e) {
		var json = this.responseText;
		var response = JSON.parse(json);
		//alert(response);
		callback(e);

	};
	xhr.onerror = function(e) {
		//alert(e);
		callbackError(e);
	};
};

