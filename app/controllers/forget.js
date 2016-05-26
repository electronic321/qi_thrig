var forgetPasswordRequest = require('/api/forgotPassword');

$.btn_send.addEventListener('click', function(e) {
	forgetPasswordRequest.forgotPassword({
		email : $.tf_email.value,
	}, function(load) {
		alert("Password sent to" + $.tf_email.value);
		$.self.close();

	}, function(error) {
		alert('Error : ' + JSON.stringify(error));

	});

});

$.self.open();


	//
	// $.btn_forgotPassword.addEventListener('click', function(e) {
	//
	// forgotPassApiCall.post({
	//
	// url :"http://thriggle.com/api/users/forgotPassword",
	// params : {
	//
	// email : $.tf_email.value,
	//
	// },
	// onSuccess: function(e){
	//
	// alert('Registered Successfully');
	// },
	// onError: function(e){
	//
	// alert('Registration Failed');
	// }
	//
	// });
	// });

