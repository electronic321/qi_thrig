var day = require('/views/day');
var db = require('/db/db');
//var searching = db.Show();
var view1 = day.day('white');
var view2 = day.day('white');
var view3 = day.day('white');
var view4 = day.day('white');
var view5 = day.day('white');
var view6 = day.day('white');
var view7 = day.day('white');

$.scrollableView.views = [view1, view2, view3, view4, view5, view6, view7];

// View (Event Locations)

$.view_imgView.addEventListener('click', function(e) {
	if ($.tf_searchBar.value != null) {
		var location = Alloy.createController('location',{
			tf_search : $.tf_searchBar
		}).getView();

		if (Ti.Android) {
			location.open();
		} else {
			alert("Enter your zipcode or state above");
		}
	}
});

$.view_imgAdd.addEventListener('click', function(e) {
	var addEvents = Alloy.createController('addEvents').getView();
	if (Ti.Android) {
		addEvents.open();

	} else {

	}
});

$.tf_searchBar.addEventListener('click', function(e) {
	var search = Alloy.createController('searchEvents', {
		tf_searchBar : $.tf_searchBar
	}).getView();
	if (Ti.Android) {
		search.open();

	} else {

	}
});

$.img_searchIcon.addEventListener('click', function(e) {

	var search = Alloy.createController('searchEvents', {
		tf_searchBar : $.tf_searchBar
		//searchingText : searching
	}).getView();
	if (Ti.Android) {
		search.open();

	} else {

	}
});

$.view_imgUser.addEventListener('click', function(e) {
	var profile = Alloy.createController('profile').getView();
	if (Ti.Android) {
		profile.open();
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
