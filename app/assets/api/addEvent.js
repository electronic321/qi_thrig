exports.addEvent = function(args, callback, callbackError) {

	var URL = "http://thriggle.com/rest/insertEvent";
	var params = {

		file : args.file,
		title : args.title,
		interest_name : args.interest_name,
		interestid : Alloy.Globals.interestId,
		subinterest_name : args.subinterest_name,
		subinterest_id1 : args.subinterest_id1,
		place : args.place,

		address : args.address,
		zipcode : args.zipcode,
		website : args.website,
		phone : args.phone,
		start_date : args.start_date,

		end_date : args.end_date,
		start_time : args.start_time,
		end_time : args.end_time,
		description : args.description,
		days_date : args.days_date,
		userid : args.userid,
		locationid : args.locationid,
		token : args.token,
		// start_week_day : start_days_index,
		// end_week_day : end_day_index,
	};

	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("POST", URL);
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

