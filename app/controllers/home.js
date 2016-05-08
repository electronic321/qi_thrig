$.view_imgEvents.addEventListener('click', function(e) {
	var events = Alloy.createController('events').getView();
	if (Ti.Android) {
		events.open();
	} else {

	}
});

$.view_imgUser.addEventListener('click', function(e) {
	var profile = Alloy.createController('profile').getView();
	if (Ti.Android) {
		profile.open();
	} else {

	}
});

$.self.open();
