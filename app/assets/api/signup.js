exports.signup = function(args, callback, callbackError) {
	var params = {
		//type : "signup",
		fullname : Ti.App.Properties.getString('tf_userName').value,
		password : Ti.App.Properties.getString('tf_password').value,
		confirmPassword : Ti.App.Properties.getString('tf_verifyPassword').value,
		email : args.tf_email.value,
		zipcode : tf_zipCode.value,
			//	businessCategory : args.tf_phoneNumber,   ????
		phone: args.tf_phoneNumber.value,
		Address1:args.tf_streetAddress.value
		
	};

	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("POST", "http://thriggle.com/rest/signup");
	xhr.send(params);

	xhr.onload = function(e) {
		var json = this.responseText;
		var response = JSON.parse(json);
		//alert(response);
		callback(response);

	};
	xhr.onerror = function(e) {
		//alert(e);
		callbackError(e);
	};
};

