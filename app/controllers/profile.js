var args = arguments[0] || {};
args.umair;
args.sabir;
// args.self.backgroundColor = 'green';



$.view_imgEvents.addEventListener('click', function(e) {
	var events = Alloy.createController('events').getView();
	if (Ti.Android) {
		events.open();
		$.self.close();

	} else {

	}
});

$.view_imgHome.addEventListener('click', function(e) {
	//var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		$.self.close();

	} else {

	}
});
$.self.open();
