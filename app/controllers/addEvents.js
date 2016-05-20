var args = arguments[0] || {};

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

// Switch
function outputState() {
	
	
	Ti.API.info('Switch value: ' + $.switch_dontShowEndTime.value);
}

// Switch
function outputStartState() {
	Ti.API.info('Switch value: ' + $.switch_dontShowStartTime.value);
}

function outputOneTimeState() {
	Ti.API.info('Switch value: ' + $.switch_oneTime.value);
}

// Switch
function outputRepeatedTimeState() {
	Ti.API.info('Switch value: ' + $.switch_repeatedEvents.value);
}

// Calender Click Listener
$.view_calenderOneTimeEvent.addEventListener('click', function(e) {
	var initDate = $.tf_calenderOneTimeEvent.value ? new Date($.tf_calenderOneTimeEvent.value) : new Date();
	require('DatePickerView')({
		value : initDate,
		callback : function(selDate) {
			console.log('Selected date: ', formatDate(selDate));
			$.tf_calenderOneTimeEvent.value = formatDate(selDate);
		}
	}).open();
});

$.view_calenderRepeatedEvents.addEventListener('click', function(e) {
	var initDate = $.tf_calenderRepeatedEvents.value ? new Date($.tf_calenderRepeatedEvents.value) : new Date();
	require('DatePickerView')({
		value : initDate,
		callback : function(selDate) {
			console.log('Selected date: ', formatDate(selDate));
			$.tf_calenderRepeatedEvents.value = formatDate(selDate);
		}
	}).open();
});
function formatDate(dateObj) {
	return ('0' + (dateObj.getMonth() + 1)).slice(-2) + '/' + ('0' + dateObj.getDate()).slice(-2) + '/' + dateObj.getFullYear();
}

