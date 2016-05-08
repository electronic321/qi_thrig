$.view_imgEvents.addEventListener('click', function(e) {
	var events = Alloy.createController('events').getView();
	if (Ti.Android) {
		$.self.close();
		events.open();
		
	} else {

	}
});

$.self.open();
