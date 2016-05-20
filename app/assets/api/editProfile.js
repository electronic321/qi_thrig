exports.editProfile = function(args, callback, callbackError) {

	var URL = "http://thriggle.com/rest/updateProfile";
	var params = {
		file : args.image,
		userId : '4014080',
		location_id : '856560',
		fname : args.username,
		zipcode : args.zipcode,
		email : args.email,
		password : args.password,
		// userId : Ti.App.Properties.getObject('loginResponse').user_Id,
		// location_id : Ti.App.Properties.getObject('loginResponse').location_id,

	};
	
	//alert(Ti.App.Properties.getObject('loginResponse'));

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

