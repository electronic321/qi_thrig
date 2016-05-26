var signinRequest = require('/api/signin');

$.btn_signIn.addEventListener('click', function(e) {
	if ($.tf_email.value == '') {
		alert('Email is missing.');
		return;
	}

	if ($.tf_password.value == '') {
		alert('Password is missing.');
		return;
	}
	Ti.App.Properties.setBool('isLogin', true);
	signinRequest.signin({
		email : $.tf_email.value,
		password : $.tf_password.value,
	}, function(load) {

		Ti.App.Properties.setObject('loginResponse', load);
		var home = Alloy.createController('home').getView();
		if (Ti.Android) {
		home.open();
		//$.self.close();
		
		} else {
		
		}

	}, function(error) {
		alert('Error : ' + JSON.stringify(error));

	});

});

$.btn_signUp.addEventListener('click', function(e) {
	var signUp = Alloy.createController('signup').getView();
	if (Ti.Android) {
		signUp.open();
	} else {

	}
});

$.lbl_skipLogin.addEventListener('click', function(e) {
	Ti.App.Properties.setBool('isLogin', true); // Make it false when you are donw with testing ... User cant add event if not logged in
	var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		home.open();
	} else {

	}
});

$.lbl_forgetPassword.addEventListener('click', function(e) {

	var forgotPassword = Alloy.createController('forget').getView();
	if (Ti.Android) {
		forgotPassword.open();
	} else {

	}
});

$.self.open();
