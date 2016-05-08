$.btn_signIn.addEventListener('click', function(e) {
	var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		home.open();
	} else {

	}
});

$.btn_signUp.addEventListener('click', function(e) {
	var signUp = Alloy.createController('signup').getView();
	if (Ti.Android) {
		signUp.open();
	} else {

	}
});


$.self.open();
