var args = arguments[0] || {};

var update = require('/api/editProfile');

$.view_imgEvents.addEventListener('click', function(e) {
	var events = Alloy.createController('events').getView();
	if (Ti.Android) {
		events.open();
		$.self.close();

	} else {

	}
});
//$.imguser.image = 'api link here';
$.view_imgHome.addEventListener('click', function(e) {
	//var home = Alloy.createController('home').getView();
	if (Ti.Android) {
		$.self.close();

	} else {

	}
});

$.btn_update.addEventListener('click', function(e) {

	update.editProfile({
		image : $.img_user.toImage(),
		username : $.tf_userName.value,
		email : $.tf_email.value,
		zipcode : $.tf_zipCode.value,
		password : $.tf_password.value,

	}, function(load) {
		alert(JSON.stringify(load.location_id));
		$.lbl_userName = $.tf_userName.value;
		alert('Profile Updated');

	}, function(error) {
		alert('Error : ' + JSON.stringify(error));
	});
});

$.btn_takePic.addEventListener('click', function(e) {

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

$.btn_uploadPic.addEventListener('click', function(e) {

	openGallery();
});

function openCamera() {
	Titanium.Media.showCamera({
		//function to call upon successful load of the gallery
		success : function(e) {
			if (e.mediaType === Titanium.Media.MEDIA_TYPE_PHOTO) {
				$.img_user.image = e.media;
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
				$.img_user.image = e.media;
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

$.self.open();
