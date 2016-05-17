var signinRequest = require('/api/signin');

$.btn_signIn.addEventListener('click', function(e) {
	Ti.App.Properties.setBool('isLogin', true);
	signinRequest.signin({
		email : $.tf_email.value,
		password : $.tf_password.value,
	}, function(load) {
		alert(JSON.stringify(load.source.responseText));

		Ti.App.Properties.setObject('loginResponse', load);

		var home = Alloy.createController('home').getView();
		if (Ti.Android) {
			home.open();
			$.self.close();

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
	Ti.App.Properties.setBool('isLogin', false);
	var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		home.open();
	} else {

	}
});

$.self.open();
