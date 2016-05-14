var args = arguments[0] || {};



$.view_imgHome.addEventListener('click', function(e) {
	var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		$.self.close();

	} else {

	}
});

$.view_imgUser.addEventListener('click', function(e) {
	var profile = Alloy.createController('profile' , {
		sabir : 'developer',
		umair : 'senior developer',

		self : $.self
	}).getView();
	if (Ti.Android) {
		profile.open();
	    $.self.close();

	} else {

	}
});

