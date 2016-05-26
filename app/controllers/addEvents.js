var args = arguments[0] || {};
var interest = require('/api/getInterest');
var subInterest = require('/api/getSubInterest');
var post = require('/api/addEvent');
var ImageFactory = require('ti.imagefactory');
var loginResponse = Ti.App.Properties.getObject('loginResponse');
//alert("login response is  ::::" + JSON.stringify(loginResponse));
$.view_imgHome.addEventListener('click', function(e) {
	var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		$.self.close();

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

// Opening Camera
function openCamera() {
	Titanium.Media.showCamera({
		//function to call upon successful load of the gallery
		success : function(e) {
			if (e.mediaType === Titanium.Media.MEDIA_TYPE_PHOTO) {
				// $.img_camera.image = e.media;
				//profileImgcheck = true;

				var newBlob = ImageFactory.compress(e.media, 0.25);

				$.img_camera.image = newBlob;
			}
		},

		error : function(e) {
			alert("There was an error");
		},
		cancel : function(e) {
			//  alert("The event was cancelled");
		},
	});
}

// Images from Gallery

function openGallery() {
	Titanium.Media.openPhotoGallery({
		//function to call upon successful load of the gallery
		success : function(e) {
			if (e.mediaType === Titanium.Media.MEDIA_TYPE_PHOTO) {
				$.img_camera.image = e.media;
				//profileImgcheck = true;
			}
		},

		error : function(e) {
			alert("There was an error");
		},
		cancel : function(e) {
			//  alert("The event was cancelled");
		},
	});
}

$.btn_snap.addEventListener('click', function(e) {

	if (Ti.Media.hasCameraPermissions()) {
		openCamera();
	} else {
		Ti.Media.requestCameraPermissions(function(e) {
			if (e.success) {
				//alert('You granted permission.');
				openCamera();
			} else {
				alert('You denied permission.');
			}
		});
	}
});

$.btn_upload.addEventListener('click', function(e) {

	openGallery();
});

// Interest API Call

$.view_interest.addEventListener('click', function(e) {
	interest.getInterest(function(load) {
		//var dataReceived = [];

		//alert(load[0].name);
		// for (var i = 0; i < load.length; i++) {
		// dataReceived = load[i];
		// //alert(dataReceived[i].name + dataReceived[i].id);
		//
		// }
		//console.log(JSON.stringify(dataReceived));

		var listView = Ti.UI.createListView({
			backgroundColor : 'white',
			touchEnabled : true,
			borderColor : 'black',
			canScroll : true,
			separatorColor : 'black',
			top : 100,
			bottom : 20,

		});

		var listSection = Ti.UI.createListSection();
		var dataInterest = [];
		for (var i = 0; i < load.length; i++) {
			Ti.Android ? Ti.UI.Android.hideSoftKeyboard() : textfiled_name.blur();

			dataInterest.push({
				properties : {
					font : {
						fontSize : '18sp',
						fontWeight : 'bold'
					},
					left : 30,
					itemId : i,
					title : load[i].name,
					id : load[i].id,
					color : '#000000',
				}
			});
		}

		listSection.setItems(dataInterest);
		listView.addEventListener('itemclick', function(e) {
			$.tf_interest.value = load[e.itemId].name;
			Alloy.Globals.interestId = load[e.itemId].id;
			listView.visible = false;

		});
		listView.addEventListener('noresults', function(e) {
			alert("No results found!");
		});
		listView.sections = [listSection];
		$.self.add(listView);
	}, function(error) {
		alert('Error : ' + JSON.stringify(error));

	});

});
// Sub Interest API call

$.view_subInterest.addEventListener('click', function(e) {
	subInterest.getSubInterest(function(load) {

		var listView = Ti.UI.createListView({
			backgroundColor : 'white',
			touchEnabled : true,
			borderColor : 'black',
			canScroll : true,
			separatorColor : 'black',
			top : 140,
			bottom : 20,

		});

		var listSection = Ti.UI.createListSection();
		var dataSubInterest = [];
		for (var i = 0; i < load.length; i++) {
			Ti.Android ? Ti.UI.Android.hideSoftKeyboard() : textfiled_name.blur();

			dataSubInterest.push({
				properties : {
					font : {
						fontSize : '18sp',
						fontWeight : 'bold'
					},
					left : 30,
					itemId : i,
					title : load[i].catname,
					catid : load[i].catid,
					homeid : load[i].homeid,
					color : '#000000',
				}
			});
		}

		listSection.setItems(dataSubInterest);
		listView.addEventListener('itemclick', function(e) {
			$.tf_subInterest.value = load[e.itemId].catname;
			listView.visible = false;

		});
		listView.addEventListener('noresults', function(e) {
			alert("No results found!");
		});
		listView.sections = [listSection];
		$.self.add(listView);
	}, function(error) {
		alert('Error : ' + JSON.stringify(error));

	});

});

//  Setting Event Start Time
$.view_clockStart.addEventListener('click', function(e) {
	var time = require('/timePicker');

	var clockStart = time.timePicker(function(load) {
		alert(load);
		var hours = load.getHours();
		var mins = load.getMinutes();
		$.lbl_TimeStart.text = hours + ' : ' + mins;
	});

	$.self.add(clockStart);
});

//  Setting Event Close Time

$.view_clockEnd.addEventListener('click', function(e) {
	var time = require('/timePicker');

	var clockEnd = time.timePicker(function(load) {
		var hours = load.getHours();
		var mins = load.getMinutes();
		$.lbl_TimeEnd.text = hours + ' : ' + mins;
	});

	$.self.add(clockEnd);
});

// Switch
function outputStartState() {
	Ti.API.info('Switch value: ' + $.switch_dontShowStartTime.value);
	if (!$.switch_dontShowStartTime.value) {
		$.view_clockStart.show();
	} else {
		$.view_clockStart.hide();

	}
}

// Switch
function outputClosedState() {

	Ti.API.info('Switch value: ' + $.switch_dontShowEndTime.value);
	if (!$.switch_dontShowEndTime.value) {
		$.view_clockEnd.show();
	} else {
		$.view_clockEnd.hide();

	}
}

// Switch
function outputOneTimeState() {
	Ti.API.info('Switch value: ' + $.switch_oneTime.value);
	if (!$.switch_oneTime.value) {
		$.lbl_repeatedEvents.show();
		$.switch_repeatedEvents.show();
		$.view_calenderRepeatedEvents.show();

	} else {
		$.lbl_repeatedEvents.hide();
		$.switch_repeatedEvents.hide();
		$.view_calenderRepeatedEvents.hide();
	}
}

// Switch
function outputRepeatedTimeState() {
	Ti.API.info('Switch value: ' + $.switch_repeatedEvents.value);
	if (!$.switch_repeatedEvents.value) {
		$.view_calenderRepeatedEvents.hide();
	} else {
		$.view_calenderRepeatedEvents.show();
	}
}

// Calender Click Listeners
$.view_calenderOneTimeEvent.addEventListener('click', function(e) {
	var initDate = $.lbl_calenderOneTimeEvent.text ? new Date($.lbl_calenderOneTimeEvent.text) : new Date();
	require('DatePickerView')({
		value : initDate,
		callback : function(selDate) {
			console.log('Selected date: ', formatDate(selDate));
			$.lbl_calenderOneTimeEvent.text = formatDate(selDate);
		}
	}).open();
});

$.view_calenderRepeatedEvents.addEventListener('click', function(e) {
	var initDate = $.lbl_calenderRepeatedEvents.text ? new Date($.lbl_calenderRepeatedEvents.text) : new Date();
	require('DatePickerView')({
		value : initDate,
		callback : function(selDate) {
			console.log('Selected date: ', formatDate(selDate));
			$.lbl_calenderRepeatedEvents.text = formatDate(selDate);
		}
	}).open();
});
function formatDate(dateObj) {
	return ('0' + (dateObj.getMonth() + 1)).slice(-2) + '/' + ('0' + dateObj.getDate()).slice(-2) + '/' + dateObj.getFullYear();
}

// Posting an Event

$.btn_post.addEventListener('click', function(e) {

	post.addEvent({

		file : $.img_camera.toImage(),
		title : $.tf_eventTitle.value,
		interest_name : $.tf_interest.value,
		interestid : Alloy.Globals.interestId,

		subinterest_name : $.tf_subInterest.value,
		subinterest_id1 : Alloy.Globals.interestId,
		place : $.tf_placeName.value,
		address : $.tf_streetAddress.value,
		zipcode : $.tf_zipCode.value,
		website : $.tf_website.value,
		phone : $.tf_phoneNumber.value,

		start_date : $.tf_calenderOneTimeEvent.value,
		end_date : $.tf_calenderRepeatedEvents.value,
		start_time : $.lbl_TimeStart.text,
		end_time : $.lbl_TimeEnd.text,
		description : $.ta_description.value,

		days_date : 'event_dates',
		userid : loginResponse.userId,
		locationid : loginResponse.location_id,
		token : loginResponse.token,
		// start_week_day : start_days_index,
		// end_week_day : end_day_index,

	}, function(load) {
		if (Ti.Android) {
			alert("Sucessful" + load);
			$.self.close();

		} else {

		}
	}, function(error) {
		alert('Error : ' + JSON.stringify(error));

	});
});
