
$.view_imgEvents.addEventListener('click', function(e) {
	var events = Alloy.createController('events').getView();
	if (Ti.Android) {
		events.open();
	} else {

	}
});


$.btn_go.addEventListener('click', function(e) {
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

$.btn_addEvent.addEventListener('click', function(e) {

	if (Ti.App.Properties.getBool('isLogin', true)) {
		var addEvents = Alloy.createController('addEvents').getView();
		if (Ti.Android) {

			addEvents.open();
		}
	} else {
		alert("Please Signup or Signin to add an Event");
	}
});

$.self.open();
