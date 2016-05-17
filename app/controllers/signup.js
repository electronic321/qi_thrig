//var sign_upApicall = require('HttpClient');

var signupRequest = require('/api/signup');
var accountType = 'consumer';

$.lbl_businessCategory.addEventListener('click', function(e) {
	accountType = 'business';
	var lbl_businessCategory = Alloy.createController('searchBusinessCategories', {
		lbl_businessCategory : $.lbl_businessCategory
	}).getView();
	if (Ti.Android) {
		lbl_businessCategory.open();
		//$.self.close();

	} else {

	}
});

$.btn_signUp.addEventListener('click', function(e) {

	if (accountType == "consumer") {
		signupRequest.signup({
			username : $.tf_userName.value,
			email : $.tf_email.value,
			zipcode : $.tf_zipCode.value,
			password : $.tf_password.value,
			verifyPassword : $.tf_verifyPassword.value,
			accountType : accountType,
		}, function(load) {
			var home = Alloy.createController('home').getView();
			if (Ti.Android) {
				//alert(lbl_businessCategory.text);
				home.open();
				$.self.close();

			} else {

			}
		}, function(error) {
			alert('Error : ' + JSON.stringify(error));

		});
	} else {
		signupRequest.signup({
			username : $.tf_userName.value,
			email : $.tf_email.value,
			zipcode : $.tf_zipCode.value,
			password : $.tf_password.value,
			verifyPassword : $.tf_verifyPassword.value,
			phoneNumber : $.tf_phoneNumber.value,
			streetAddress : $.tf_streetAddress.value,
			categoryName : $.lbl_businessCategory.value,
			accountType : accountType,
		}, function(load) {
			var home = Alloy.createController('home').getView();
			if (Ti.Android) {
				//alert(lbl_businessCategory.text);
				home.open();
				$.self.close();

			} else {

			}
		}, function(error) {
			alert('Error : ' + JSON.stringify(error));

		});

	}
});

// Other Way Around

// sign_upApicall.post({
//
// url : "http://thriggle.com/rest/signup",
// params : {
// full_name : $.tf_userName.value,
// email : $.tf_email.value,
// zipcode : $.tf_zipCode.value,
// password : $.tf_password.value,
// confirm_password : $.tf_verifyPassword.value,
// category_id : null,
// category_name : $.lbl_businessCategory.value,
// phone : $.tf_phoneNumber.value,
// address1 : $.tf_streetAddress.value,
// },
//
// onSuccess : function(e) {
//
// alert('Registered Successfully');
//
// },
// onError : function(e) {
//
// alert('Registration Failed');
// },

